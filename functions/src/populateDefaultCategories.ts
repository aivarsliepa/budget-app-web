import * as admin from "firebase-admin";

interface CategoryData {
  name: string;
  type: "expense";
  parentId?: string;
}

const defaultRootExpeneses: string[] = [
  "Food",
  "Transportation",
  "Home",
  "Entertainment",
  "Clothing",
  "Insurance",
  "Electronics",
  "Gifts",
  "Education",
  "Health"
];

const defaultFoodExpenses: string[] = ["Eat out", "Groceries", "Snacks"];
const defaultTransportationExpenses: string[] = ["Car", "Public transport", "Taxi"];
const defaultHomeExpenses: string[] = ["Rent", "Utilities", "Bills"];

const mapNameToCategoryData: (name: string) => CategoryData = name => ({ name, type: "expense" });

const rootExpenses: CategoryData[] = defaultRootExpeneses.map(mapNameToCategoryData);
const foodExpenses: CategoryData[] = defaultFoodExpenses.map(mapNameToCategoryData);
const transportationExpenses: CategoryData[] = defaultTransportationExpenses.map(
  mapNameToCategoryData
);
const homeExpenses: CategoryData[] = defaultHomeExpenses.map(mapNameToCategoryData);

function addParentRef<T extends { parentId?: string }>(
  ref: admin.firestore.DocumentReference
): (data: T) => T {
  return function(data: T) {
    return { ...data, parent: ref.id };
  };
}

function addDataToCollection<T>(collection: admin.firestore.CollectionReference) {
  return function(data: T) {
    return collection.add(data);
  };
}

export async function populateDefaultCategories(user: admin.auth.UserRecord): Promise<any> {
  const collection = admin.firestore().collection(`users/${user.uid}/categories`);

  const [foodData, transportationData, homeData, ...otherData] = rootExpenses;

  const foodRef = collection.doc();
  const transportationRef = collection.doc();
  const homeRef = collection.doc();

  const addDataToCategoryCollection = addDataToCollection(collection);

  const promises1 = otherData.map(addDataToCategoryCollection);
  const promises2 = foodExpenses.map(addParentRef(foodRef)).map(addDataToCategoryCollection);
  const promises3 = transportationExpenses
    .map(addParentRef(transportationRef))
    .map(addDataToCategoryCollection);
  const promises4 = homeExpenses.map(addParentRef(homeRef)).map(addDataToCategoryCollection);

  const promises5 = [
    foodRef.set(foodData),
    transportationRef.set(transportationData),
    homeRef.set(homeData)
  ];

  return await Promise.all<any>([
    ...promises1,
    ...promises2,
    ...promises3,
    ...promises4,
    ...promises5
  ]);
}
