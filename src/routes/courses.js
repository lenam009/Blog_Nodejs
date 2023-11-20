const express = require('express');
const router = express.Router()

const courseController = require('../app/controllers/CourseController')

router.get('/create', courseController.create)
router.post('/store', courseController.store)
router.post('/handle-from-actions', courseController.handleFormActions)
router.get('/:id/edit', courseController.edit)
router.post('/:id/delete', courseController.delete)
router.post('/:id/forceDelete', courseController.forceDelete)
router.post('/:id/restore', courseController.restore)
router.put('/:id', courseController.update)
router.get('/:slug', courseController.show)

module.exports = router;



