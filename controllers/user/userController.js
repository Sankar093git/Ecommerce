
const loadHomepage=async(req,res)=>{
    try {
        return res.render('home');
        
    } catch (error) {
        console.log('Home page not found');
        res.status(500).send('Server error');
    }
}

const pageNotFound= async(req,res)=>{
    try {

        return res.render('404Notfound');
        
    } catch (error) {
        
        res.redirect("/pagenotfound");
    }
}

module.exports={
    loadHomepage,
    pageNotFound
}