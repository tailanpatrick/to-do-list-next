/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0wnpf4494xd1jbr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xwv7ztxt",
    "name": "password",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 3,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0wnpf4494xd1jbr")

  // remove
  collection.schema.removeField("xwv7ztxt")

  return dao.saveCollection(collection)
})
