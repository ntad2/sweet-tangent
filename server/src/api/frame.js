const express = require('express')
const router = express.Router()
var tblFrame = require('../storage/Frame')
var md5 = require('md5')

// Help:
// /api/frame/     -- get returns this help | post to create a new record
// /api/frame/:id  -- get returns the frame info w nbr of likes & comments | patch to update | delete to remove/archive
// /api/frame/page/:orderby/:order/:pgsz/:last -- returns all records with paging*
// /api/frame/instance/:id/:orderby/:order/:pgsz/:last -- returns frames for the instance id*
// /api/frame/user/:id/:orderby/:order/:pgsz/:last -- returns frames for this user id*
// * defaults: orderBy createDate ASC with page size of 20
//   orderBy: id, createDate or updateDate
//   order: ASC or DESC

// FOR TESTING
tblFrame.createTable(true);

// e.g. /api/frame/
router.get('/', (req, res) => {
  const help = "Frame API Help:" +
    "<br/>/     -- get returns this help | post to create a new record \n" +
    "<br/>/:id  -- get returns the frame info w nbr of likes & comments | patch to update | delete to remove/archive \n" +
    "<br/>/page/:orderby/:order/:pgsz/:last -- returns all records with paging* \n" +
    "<br/>/instance/:id/:orderby/:order/:pgsz/:last -- returns frames for the instance id* \n" +
    "<br/>/user/:id/:orderby/:order/:pgsz/:last -- returns frames for this user id* \n" +
    "<br/>* defaults: orderBy createDate ASC with page size of 20 \n" +
    "<br/>  orderBy: id, createDate or updateDate \n" +
    "<br/>  order: ASC or DESC \n";
  res.send(help)
})

// get all records
router.get('/page', (req, res) => {
  tblFrame.getAll(res)
})
// get a specific record - http://localhost:3000/api/employee/2
router.get("/:id", (req, res) => {
  tblFrame.get(req.params.id, res)
})
// Delete a record
router.delete("/:id", (req, res, next) => {
  tblFrame.delete(req.params.id, res)
 })

// add a new record
// in Postman, Body - raw - JSON: {"name":"test", "email": "test@example.com", "password": "test123"}
router.post("/", (req, res) => {
  // TODO: do some error checking  
  //tblFrame.add(data, res)
  res.send("TODO: write the API to insert new record.")
})

// Update a record
router.patch("/:id", (req, res, next) => {
  // TODO: do some error checking  
  //tblFrame.update(req.params.id, data, res)
  res.send("TODO: write the API to update a record.")
})

module.exports = router