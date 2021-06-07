const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = "db.sqlite"  // NOTE: this filename is added to .gitignore

// second param: sqlite3.OPEN_READWRITE, 
let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  }
  console.log('Connected to the SQlite database.');
});
module.exports = db

// close the database connection
// function close() {
//   db.close( (err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('Close the database connection.')
//   }); 
// }
// exports.close = close;