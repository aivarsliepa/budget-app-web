export interface CategoryData {
  name: string;
  type: "expense";
  parentId?: string;
}

/**
 * Data + firestore id
 */
export interface Category extends CategoryData {
  id: string;
}
