import { AngularFirestore } from "@angular/fire/firestore";
import { ReplaySubject, Subject, Observable } from "rxjs";
import { map, takeUntil } from "rxjs/operators";
import { Injectable } from "@angular/core";

import { documentChangeActionToData } from "../utils/firestore-utils";
import { Category, CategoryData } from "src/app/core/models/Category";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  private categories$ = new ReplaySubject<Category[]>(1);
  private notifier = new Subject<void>();

  constructor(private db: AngularFirestore, private userService: UserService) {
    this.userService.getUser().subscribe(user => {
      this.notifier.next();

      if (!user) {
        this.categories$.next([]);
        return;
      }

      this.db
        .collection<CategoryData>(this.getCategoriesCollectionPath())
        .snapshotChanges()
        .pipe(
          map(actions => actions.map(documentChangeActionToData)),
          takeUntil(this.notifier)
        )
        .subscribe(categories => this.categories$.next(categories));
    });
  }

  getCategoriesCollectionPath(): string {
    return this.userService.getUserDocPath() + "/categories";
  }

  getCategories(): Observable<Category[]> {
    return this.categories$.asObservable();
  }
}
