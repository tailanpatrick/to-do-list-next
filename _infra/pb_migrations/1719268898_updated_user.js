/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("twnvn3l94wu7z61")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ghsxjfi6",
    "name": "tasks",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "2c8zfa74tmt695q",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("twnvn3l94wu7z61")

  // remove
  collection.schema.removeField("ghsxjfi6")

  return dao.saveCollection(collection)
})
