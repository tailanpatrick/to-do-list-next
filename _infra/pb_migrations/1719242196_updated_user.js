/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("twnvn3l94wu7z61")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r2lfktf5",
    "name": "name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("twnvn3l94wu7z61")

  // remove
  collection.schema.removeField("r2lfktf5")

  return dao.saveCollection(collection)
})
