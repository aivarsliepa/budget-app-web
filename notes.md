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
      type: String ("expense" | "income")
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
  selectedWallet: String (walletId)
}]
```
