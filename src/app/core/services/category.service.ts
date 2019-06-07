import { AngularFirestore, DocumentReference } from "@angular/fire/firestore";
import { ReplaySubject, Subject, Observable } from "rxjs";
import { map, takeUntil } from "rxjs/operators";
import { Injectable } from "@angular/core";

import { CategoryData, CategoryGroup } from "src/app/core/models/Category";
import { documentChangeActionToData } from "../utils/firestore-utils";
import { StringToStringMap } from "../models/general";
import { UserService } from "./user.service";

interface StringToCategoryGroupMap {
  [s: string]: CategoryGroup;
}

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  // private categories$ = new ReplaySubject<Category[]>(1);
  private categorieGroups$ = new ReplaySubject<CategoryGroup[]>(1);

  private notifier = new Subject<void>();

  constructor(private db: AngularFirestore, private userService: UserService) {
    // this.userService.getUser().subscribe(user => {
    //   this.notifier.next();

    //   if (!user) {
    //     this.categories$.next([]);
    //     return;
    //   }

    //   this.db
    //     .collection<CategoryData>(this.getCategoriesCollectionPath())
    //     .snapshotChanges()
    //     .pipe(
    //       map(actions => actions.map(documentChangeActionToData)),
    //       takeUntil(this.notifier)
    //     )
    //     .subscribe(categories => this.categories$.next(categories));
    // });

    // this.categories$.subscribe(categories => {
    //   if (categories.length === 0) {
    //     this.categorieGroups$.next([]);
    //     return;
    //   }

    //   const rootGroup: CategoryGroup = {
    //     name: "",
    //     categories: []
    //   };

    //   const idToNameMap: StringToStringMap = categories.reduce<StringToStringMap>(
    //     (mapping, category) => {
    //       mapping[category.id] = category.name;
    //       return mapping;
    //     },
    //     {}
    //   );

    //   const idToCategoryGroupMap: StringToCategoryGroupMap = {};

    //   categories.forEach(category => {
    //     const { parentId } = category;

    //     if (!parentId) {
    //       rootGroup.categories.push(category);
    //       return;
    //     }

    //     if (parentId in idToCategoryGroupMap) {
    //       idToCategoryGroupMap[parentId].categories.push(category);
    //     } else {
    //       idToCategoryGroupMap[parentId] = {
    //         categories: [category],
    //         name: idToNameMap[parentId]
    //       };
    //     }
    //   });

    //   const groups: CategoryGroup[] = [rootGroup, ...Object.values(idToCategoryGroupMap)];

    //   this.categorieGroups$.next(groups);
    // });

    this.userService.getUser().subscribe(user => {
      this.notifier.next();

      if (!user) {
        this.categorieGroups$.next([]);
        return;
      }

      this.db
        .collection<CategoryData>(this.getCategoriesCollectionPath())
        .snapshotChanges()
        .pipe(
          map(actions => actions.map(documentChangeActionToData)),
          takeUntil(this.notifier)
        )
        .subscribe(categories => {
          if (categories.length === 0) {
            this.categorieGroups$.next([]);
            return;
          }

          const rootGroup: CategoryGroup = {
            name: "",
            categories: []
          };

          const idToNameMap: StringToStringMap = categories.reduce<StringToStringMap>(
            (mapping, category) => {
              mapping[category.id] = category.name;
              return mapping;
            },
            {}
          );

          const idToCategoryGroupMap: StringToCategoryGroupMap = {};

          categories.forEach(category => {
            const { parentId } = category;

            if (!parentId) {
              rootGroup.categories.push(category);
              return;
            }

            if (parentId in idToCategoryGroupMap) {
              idToCategoryGroupMap[parentId].categories.push(category);
            } else {
              idToCategoryGroupMap[parentId] = {
                categories: [category],
                name: idToNameMap[parentId]
              };
            }
          });

          const groups: CategoryGroup[] = [rootGroup, ...Object.values(idToCategoryGroupMap)];

          this.categorieGroups$.next(groups);
        });
    });
  }

  getCategoriesCollectionPath(): string {
    return this.userService.getUserDocPath() + "/categories";
  }

  createCategory(category: CategoryData): Promise<DocumentReference> {
    return this.db.collection<CategoryData>(this.getCategoriesCollectionPath()).add(category);
  }

  getCategoryGroups(): Observable<CategoryGroup[]> {
    return this.categorieGroups$.asObservable();
  }
}
