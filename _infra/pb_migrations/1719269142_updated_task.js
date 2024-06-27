/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2c8zfa74tmt695q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fqbk3x2w",
    "name": "user",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "twnvn3l94wu7z61",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2c8zfa74tmt695q")

  // remove
  collection.schema.removeField("fqbk3x2w")

  return dao.saveCollection(collection)
})
