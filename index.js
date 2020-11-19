const expres = require('express')
const {router} = require('./users')

var cors = require('cors')

const app = expres()

app.use(cors())
app.get('/test', (req, res) => {
    res.send('hello node')
})

app.use('/api', router)


const port= process.env.PORT || 5000
app.listen(port, ()=> console.log(`listening on http://localhost:${port}`))