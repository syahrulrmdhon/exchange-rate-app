/*const port = 4000
const express = require('express')
const compression = require('compression')
const basicAuth = require('express-basic-auth')

const app = express()

app.use(
    basicAuth({
        users: { obiwan: 'kenobi' }
    })
)

app.use(compression())
app.use(express.static('./build'))

app.get('/*', (req,res) => res.sendFile('./build/index.html'))

app.listen(port, '0.0.0.0', () => {
    console.log(`Listening on http://0.0.0.0:${port}`)
})
*/