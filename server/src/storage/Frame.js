var db = require('./db')
var dbComm = require('./common')
var md5 = require('md5')

class Frame {
  constructor() {
    this.tableName = "frame";
  }

  // FOR TESTING
  createTable(test) {
    db.run(`CREATE TABLE frame (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      layout text,
      height integer,
      width integer,
      border boolean,
      title text,
      type text,
      image text,
      video text,
      blog blob
      )`,
      (err) => {
        if (err) {
          console.log('Table frame already created.');
        } else {
          console.log('Table frame created.');
          // create some test data
          if (test) {
            let insert = 'INSERT INTO frame (layout, type, title, image) VALUES (?,?,?,?)'
            db.run(insert, ["landscape", "photo", "My Meetup Group",
              "https://secure.meetupstatic.com/photos/event/5/d/e/1/600_461784033.jpeg",
            ])
            insert = 'INSERT INTO frame (layout, type, title, video) VALUES (?,?,?,?)'
            db.run(insert, ["landscape", "video", "Happy Hour & Karaoke",
              "https://www.youtube.com/embed/1fSRJHzlcRk",
            ])
            insert = 'INSERT INTO frame (layout, type, title, ' +
              'width, height, border, blog) VALUES (?,?,?, ?,?,?,?)'
            db.run(insert, ["custom", "blog", "Scuba Diving in Australia", 400, 800, false,
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. "
            + "\n\nNemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. "
            + "\n\nUt enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?"
            ])
            console.log('Test data added to frame table.');
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
    dbComm.delete1(this.tableName, id, res)
  }

  // table specific functions requiring knowledge of the fields
  add(data, res) {
    var sql ='INSERT INTO frame (layout, height, width, border, title, type, ' +
      'image, video, blog) VALUES (?,?,?, ?,?,?, ?,?,?)'
    var params =[data.layout, data.height, data.width, data.border, data.title, data.type,
      data.image, data.video, data.blog]
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
    })
  }

  update(id, data, res) {
    // use COALESCE function to keep the current value if there is no new value (null)
    // this.changes is the number of rows updated.
    db.run(
      `UPDATE frame set 
        layout = COALESCE(?,layout),
        height = COALESCE(?,height), 
        width = COALESCE(?,width), 
        border = COALESCE(?,border), 
        title = COALESCE(?,title), 
        type = COALESCE(?,type),
        image = COALESCE(?,image), 
        video = COALESCE(?,video), 
        blog = COALESCE(?,blog)
        WHERE id = ?`,
      [data.layout, data.height, data.width, data.border, data.title, data.type, 
        data.image, data.video, data.blog, id],
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
    })
  }

  // optional: we can make this more specific
  updatePhoto(id, data, res) {
    db.run(
      `UPDATE frame set 
        layout = COALESCE(?,layout),
        border = COALESCE(?,border), 
        title = COALESCE(?,title), 
        type = "photo",
        image = COALESCE(?,image), 
        WHERE id = ?`,
      [data.layout, data.border, data.title, data.type, data.image, id],
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
    })
  }

}

let frame = new Frame();
module.exports = frame;