let Admintbl = require('../models/AdminModel');

const path = require('path');

const fs = require('fs');

const uploads = path.join('uploads');

const index = (req,res) => {
    return res.render('admin');
}

const adddata = (req,res)=>{
        let avatar = ""
        if(req.file)
        {
            avatar = uploads+"/"+req.file.filename
        }
    Admintbl.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        avatar : avatar
    },(err,data)=>{
        if(err){
            console.log("Record not insert");
            return false;
        }
        console.log("Record successfully insert");
        return res.redirect('back');
    })
}

const viewdata = (req,res) => {
    Admintbl.find({},(err,allrecord)=>{
        if(err){
            console.log("record not fetch");
            return false;
        }
        return res.render('view',{
            all : allrecord
        });
    })  
}

const deletedata = (req,res) =>{
    let id = req.params.did;
    //folder mathi image ne remove karva mate
    Admintbl.findById(id,(err,record)=>{
        if(err){
            console.log("Record not fetch");
            return false;
        };

        if(record.avatar)
        {
            fs.unlinkSync(record.avatar);
        }
    });

    //record delete karva maate
    Admintbl.findByIdAndDelete(id,(err,data)=>{
        if(err){
            console.log("Record not delete");
            return false;
        }
        console.log("Record successfully delete");
        return res.redirect('back');
    })
}

const edit = (req,res) => {
    let id = req.params.eid;
    Admintbl.findById(id,(err,srecord)=>{
        if(err){
            console.log("Record not fetch");
            return false;
        }
        return res.render('edit',{
            srec : srecord
        }) 
    })
}

const update = (req,res) =>{
    let id = req.body.editid;

    // console.log(req.file.filename);
    if(req.file)
    {   
        
         Admintbl.findById(id,(err,record)=>{
            if(err){
                console.log("Record not fetch");
                return false;
            }
            if(record.avatar)
            {
                fs.unlinkSync(record.avatar);
            }
        })
        
        Admintbl.findByIdAndUpdate(id,{
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            avatar : uploads+"/"+req.file.filename
        },(err,data)=>{
            if(err){
                console.log("Record not update");
                return false;
            }
            console.log("Record successfully upadte");
            return res.redirect('/view');
        })
    }
    else{
        let avatar = "";
        Admintbl.findById(id,(err,data)=>{
            if(err){
                console.log("Record no fetch");
                return false;
            }
             
            avatar = data.avatar;
            Admintbl.findByIdAndUpdate(id,{
                name : req.body.name,
                email : req.body.email,
                password : req.body.password,
                avatar : avatar
            },(err,re)=>{
                if(err){
                    console.log("Record not update");
                    return false;
                }
                console.log("Record successfully update");
                return res.redirect('/view');
            })
        })  
    }
   
}


module.exports = {index,adddata,viewdata,deletedata,edit,update};