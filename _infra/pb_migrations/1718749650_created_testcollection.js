/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bvdz3xqjbp65yj9",
    "created": "2024-06-18 22:27:30.239Z",
    "updated": "2024-06-18 22:27:30.239Z",
    "name": "testcollection",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1b8q0gig",
        "name": "field1",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "naod0mbe",
        "name": "field2",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bvdz3xqjbp65yj9");

  return dao.deleteCollection(collection);
})
