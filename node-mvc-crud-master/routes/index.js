const express = require('express');

const routes = express.Router();

const admincontroller = require('../controllers/AdminController');

const path = require('path');
//file upload start
const uploads = path.join('uploads');

const multer = require('multer');

const storage = multer.diskStorage({
    destination : (req,res,cb) => {
        cb(null,uploads);
    },
    filename : (req,file,cb) => {
        cb(null,file.fieldname+"-"+Date.now());
    }
});
const uploadfile = multer({storage : storage}).single('avatar');
//file upload end

routes.get('/',admincontroller.index);
routes.post('/insertdata',uploadfile,admincontroller.adddata);
routes.get('/view',admincontroller.viewdata);
routes.get('/deletaData/:did',admincontroller.deletedata);
routes.get('/editData/:eid',admincontroller.edit);
routes.post('/updatedata',uploadfile,admincontroller.update);

module.exports = routes;