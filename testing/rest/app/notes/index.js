const Router = require('express').Router;
const {
  listAction,
  detailAction,
  createAction,
  updateAction,
  deleteAction,
} = require('./controller');

const router = Router();
router.get('/', listAction);
router.get('/:id', detailAction);
router.post('/', createAction);
router.put('/:id', updateAction);
router.delete('/:id', deleteAction);

module.exports = router;