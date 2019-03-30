### firestore schema

```
users: [{
  wallets: [{
    name: String
    entries: [{
      value: Number
      date: Datetime
      categoryId: String
      description: String
      labels: [String]
    }]
  }]
  categories: [{
    name: String
    type: String ("expense" | "income")
    parentId: String
  }]
  settings: {
    useOfflineSync: Boolean
  }
}]
```
