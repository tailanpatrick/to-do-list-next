/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0wnpf4494xd1jbr")

  collection.name = "users"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0wnpf4494xd1jbr")

  collection.name = "users_table"

  return dao.saveCollection(collection)
})
