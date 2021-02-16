const http = require('http');
const express = require('express')
var cors = require('cors')
const config = require('config');

const port = process.env.PORT || 8080

const projectRouter = require('./routers/project')

const VERSION = config.get('server.contextPath');
const CONTEXTROOT = VERSION;

const app = express()
app.use(cors())
const server = http.createServer(app);

app.use(express.json())
app.use(CONTEXTROOT, projectRouter)


server.listen(port, () => {
   console.log('Server is up on port ' + port)
})