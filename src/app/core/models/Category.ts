type CategoryType = "expense";

export interface CategoryData {
  name: string;
  type: CategoryType;
  parentId?: string;
}

/**
 * Data + firestore id
 */
export interface Category extends CategoryData {
  id: string;
}
