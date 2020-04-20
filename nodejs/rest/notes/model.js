const sqlite = require('sqlite3');
const db = new sqlite.Database('./notes.db');

// drop database only for developing purpose, restart server will cleanup current data
// db.run("DROP TABLE IF EXISTS notes;");
db.run("CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, description TEXT NOT NULL);");

// get all notes
function getAll() {
  return new Promise((resolve, reject) => {
    let query = `SELECT * FROM notes`;

    db.all(query, [], (error, results) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log(results);
        resolve(results);
      }
    });
  });
}

// get one note by note's id
function getOne(id) {
  return new Promise((resolve, reject) => {
    const query =
      'SELECT * FROM notes WHERE id = ?';
    db.get(query, [id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

// insert a new note
function insert(note) {
  return new Promise((resolve, reject) => {
    console.log("inserting new note");
    console.log(note);
    const query =
      'INSERT INTO notes (title, description) VALUES (?, ?)';

    db.run(query, [note.title, note.description], function(
      error,
      result,
    ) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("added new note");
        note.id = this.lastID;
        resolve(note);
      }
    });
  });
}

// update an existing note
function update(note) {
  return new Promise((resolve, reject) => {
    const query =
      'UPDATE notes SET title = ?, description = ? WHERE id = ?';
    db.run(
      query,
      [note.title, note.description, note.id],
      (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(note);
        }
      },
    );
  });
}

// remove an existing note
function remove(id) {
  return new Promise((resolve) => {
    const query =
      'DELETE FROM notes WHERE id = ? ';
    db.run(query, [id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = {
  getAll,
  get(id) {
    return getOne(id);
  },
  delete(id) {
    return remove(id);
  },
  save(note) {
    if (!note.id) {
      return insert(note);
    } else {
      return update(note);
    }
  },
};
