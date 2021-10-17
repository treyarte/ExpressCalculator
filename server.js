/**Express Server for Node Calculator */

const app = require('./app');
const {PORT} = require('./config')

const server = app.listen(PORT, function (){
    console.log(`Server started on port: ${PORT}`)
})

server.setTimeout(5000);

module.exports = server