const db = require("../helper/fake-db.js");

// get all notes
function getAll() {
  return db.getAll().catch((err) => {
    return Promise.reject(err.message);
  });
}

// get one note by note's id
function getOne(id) {
  return db.getById(id).catch((err) => {
    return Promise.reject(err.message);
  });
}

// insert a new note
function insert(note) {
  return db.add(note).catch((err) => {
    return Promise.reject(err.message);
  });
}

// update an existing note
function update(note) {
  return db.update(note).catch((err) => {
    return Promise.reject(err.message);
  });
}

// remove an existing note
function remove(id) {
  return db.remove(id).catch((err) => {
    return Promise.reject(err.message);
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
