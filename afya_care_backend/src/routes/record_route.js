const express = require('express');
const medicine = require('../controller/medicine.controller');
const record = require('../controller/record_contoller');
const router = express.Router();
const authToken = require('../middleware/authToken')



router.post('/',[authToken.verifyToken], record.add_record);
// router.get('/',[authToken.verifyToken], record.all_record);
router.delete('/:id',[authToken.verifyToken], record.delete_record);
router.patch('/:id',[authToken.verifyToken], record.edit_record);
module.exports = router