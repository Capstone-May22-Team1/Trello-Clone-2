const express = require ('express');
const router = express.Router();

const boardsController = require("../controllers/boardsController");
const listsController = require("../controllers/listsController");
const cardsController = require("../controllers/cardsController");
const commentsController = require("../controllers/commentsController");

const { validateBoard, validateList, validateCard, validateEditCard, validateComment } = require("../validators/validators");

router.get('/boards',boardsController.getBoards );
router.get('/boards/:id', boardsController.getBoard);
router.put('/boards/:id', boardsController.updateBoard);
router.post('/boards', validateBoard, boardsController.createBoard );

router.post('/lists', validateList, listsController.createList );
router.put('/lists/:id', listsController.updateList)

router.get('/cards/:id', cardsController.getCard);
router.post('/cards', validateCard, cardsController.createCard );
router.put('/cards/:id', validateEditCard, cardsController.updateCard)

router.post('/comments', validateComment, commentsController.createComment );

module.exports = router;