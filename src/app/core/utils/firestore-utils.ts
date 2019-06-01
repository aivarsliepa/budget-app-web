import { DocumentChangeAction } from "@angular/fire/firestore";

export function documentChangeActionToData<T>(action: DocumentChangeAction<T>): T & { id: string } {
  return {
    id: action.payload.doc.id,
    ...action.payload.doc.data()
  };
}
