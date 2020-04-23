let demoData = require("./fake-db.json");

const newId = (array) => {
  if (array.length > 0) {
    return array[array.length - 1].id + 1;
  } else {
    return 1;
  }
};

const isNewNote = (note) => {
  return note.hasOwnProperty("title") && note.hasOwnProperty("description");
};

const isNote = (note) => {
  return isNewNote(note) && note.hasOwnProperty("id");
};

const getAll = async () => {
  if (demoData.length > 0) return demoData;
  else throw new Error("no data available");
};

const getById = async (id) => {
  const found = demoData.find((note) => note.id == id);
  if (found) return found;
  else throw new Error(`could nothing find with id ${id}`);
};

const add = async (note) => {
  if (isNewNote(note)) {
    note.id = newId(demoData);
    demoData.push(note);
    return note;
  } else {
    throw new Error(`invalid note`);
  }
};

const update = async (note) => {
  if (isNote(note)) {
    const index = demoData.findIndex((n) => n.id == note.id);
    if (index) {
      demoData[index] = note;
      return note;
    } else {
      throw new Error(`could not update note`);
    }
  } else {
    throw new Error(`invalid note`);
  }
};

const remove = async (id) => {
  const toKeep = demoData.filter((note) => note.id !== id);
  if (demoData.length > toKeep.length) {
    demoData = toKeep;
    return true;
  } else {
    throw new Error(`could not delete note with id ${id}`);
  }
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  remove,
};;
