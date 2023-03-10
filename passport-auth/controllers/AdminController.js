const index = (req,res) => {
    return res.render('login');
}

const logindata = (req,res) => {
    return res.render('admin');
}

// const admin = (req,res) => {
//     return res.render('admin');
// }



module.exports = {index,logindata};