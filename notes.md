### firestore schema

Currently only expenses

```
users: [{
  wallets: [{
    name: String
    entries: [{
      value: Number
      date: Datetime
      categoryId: String
      description?: String
      labels: [String]
      type: "expense"
    }]
  }]
  categories: [{
    name: String
    type: "expense"
    parentId: String
  }]
  settings: {
    useOfflineSync: Boolean
  }
  selectedWallet: String (walletId)
}]
```
