const express = require('express')
const router = express.Router()
var tblUser = require('../storage/User')
var md5 = require('md5')

// FOR TESTING
tblUser.createTable(true);


// get all records
router.get('/', (req, res) => {
  tblUser.getAll(res)
})
// get a specific record - http://localhost:3000/api/employee/2
router.get("/:id", (req, res) => {
  tblUser.get(req.params.id, res)
})
// Delete a record
router.delete("/:id", (req, res, next) => {
  tblUser.delete(req.params.id, res)
 })

// add a new record
// in Postman, Body - raw - JSON: {"name":"test", "email": "test@example.com", "password": "test123"}
router.post("/", (req, res) => {
  var errors=[]
  if (!req.body.password){
      errors.push("No password specified");
  }
  if (!req.body.email){
      errors.push("No email specified");
  }
  if (errors.length){
      res.status(400).json({"error":errors.join(",")});
      return;
  }
  var data = {
      name: req.body.name,
      email: req.body.email,
      password : md5(req.body.password)
  }
  tblUser.add(data, res)
})

// Update a record
router.patch("/:id", (req, res, next) => {
  var data = {
      name: req.body.name,
      email: req.body.email,
      password : req.body.password ? md5(req.body.password) : null
  }
  tblUser.update(req.params.id, data, res)
})

module.exports = router