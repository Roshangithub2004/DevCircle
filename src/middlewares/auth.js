
const adminAuth = (req, res, next) =>{
    const token = 'asd'
    const auth = 'asd'===token
    if (auth){
        res.send('valid')
    }
    else{
        res.send('nodt valid')
    }
}

export default {
    adminAuth
}