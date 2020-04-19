const model = require('./model');

function listAction(request, response) {
  console.log('list overview');
  model.getAll().then(
    notes => {
      const notesResponse = {
        notes,
      };
      response.json(notesResponse);
      
    },
    error => response.status(500).json(error),
  );
}

function detailAction(request, response) {
  console.log('detail');
  console.log(request);
  console.log(request.param.id);
  model.get(request.params.id).then(
    note => {
      const noteResponse = {
        ...note,
      };
      response.json(noteResponse);
    },
    error => response.status(500).json(error),
  );
}

function createAction(request, response) {
  console.log('create');
  const note = {
    title: request.body.title,
    description: request.body.description,
  };
  model
    .save(note)
    .then(
      () => response.status(201).json(note),
      error => error => response.status(500).json(error),
    );
}
function updateAction(request, response) {
  console.log('update');
  const note = {
    id: request.params.id,
    title: request.body.title,
    description: request.body.description,
  };
  model
    .save(note)
    .then(
      note => response.json(note),
      error => error => response.status(500).json(error),
    );
}

function deleteAction(request, response) {
  console.log('delete');
  const id = parseInt(request.params.id, 10);
  model
    .delete(id)
    .then(() => response.status(204).send(), error => response.send(error));
}

module.exports = {
  listAction,
  detailAction,
  createAction,
  updateAction,
  deleteAction,
};
