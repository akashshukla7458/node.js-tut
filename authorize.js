const authorize = (req, res, next) => {
    const { user } = req.query
    if (user === 'akash') {
        req.user = { name: 'akash', id: 9 }
        next()
    }
    else {
        res.status(401).send('unauthorized')
    }
}


module.exports = authorize