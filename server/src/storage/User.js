var db = require('./db')
var dbComm = require('./common')
var md5 = require('md5')

class Frame {
  constructor() {
    this.tableName = "user";
  }

  // FOR TESTING
  createTable(test) {
    db.run(`CREATE TABLE user (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name text, 
      email text UNIQUE, 
      password text, 
      CONSTRAINT email_unique UNIQUE (email)
      )`,
      (err) => {
        if (err) {
          console.log('Table user already created.');
        } else {
          console.log('Table user created.');
          // create some test data
          if (test) {
            var insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
            db.run(insert, ["admin","admin@example.com",md5("admin123456")])
            db.run(insert, ["user","user@example.com",md5("user123456")])
            console.log('Test data added to user table.');
          }
        }
    });
  }

  // common functions; only the id may be required
  getAll(res) {
    dbComm.getAll(this.tableName, res)
  }
  get(id, res) {
    dbComm.get(this.tableName, id, res)
  }
  delete(id, res) {
    dbComm.remove(this.tableName, id, res)
  }

  // table specific functions requiring knowledge of the fields
  add(data, res) {
    var sql ='INSERT INTO user (name, email, password) VALUES (?,?,?)'
    var params =[data.name, data.email, data.password]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    });  
  }

  update(id, data, res) {
  // use COALESCE function to keep the current value if there is no new value (null)
  // this.changes is the number of rows updated.
  db.run(
    `UPDATE user set 
       name = COALESCE(?,name), 
       email = COALESCE(?,email), 
       password = COALESCE(?,password) 
       WHERE id = ?`,
    [data.name, data.email, data.password, id],
    function (err, result) {
        if (err){
            res.status(400).json({"error": res.message})
            return;
        }
        res.json({
            message: "success",
            data: data,
            changes: this.changes
        })
    });

  }

}

let frame = new Frame();
module.exports = frame;