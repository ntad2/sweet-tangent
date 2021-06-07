var db = require('./db')

function getAll(table, res) {
  var sql = "select * from " + table 
  var params = []
  db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":rows
      })
    });
}

function get(table, id, res) {
  // use SQL parameter binding here to prevent SQL injection
  var sql = "select * from " + table + " where id = ?"
  var params = [id]
  db.get(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":row
      })
    });
}

// note: delete is a reserve word unless used inside a class
function delete1(table, id, res) {
  db.run(
    'DELETE FROM ' + table + ' WHERE id = ?',
    id,
    function (err, result) {
        if (err){
            res.status(400).json({"error": res.message})
            return;
        }
        res.json({"message":"deleted", changes: this.changes})
  });

}

exports.getAll = getAll
exports.get = get
exports.delete1 = delete1