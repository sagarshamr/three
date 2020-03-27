 const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const http = require('http-server')
// const server = http.createServer(app)
const port = process.env.PORT || 3000

const server = http.createServer(app)
server.listen(port, () => {
	console.log('Listening on port ${port}')
})

router.get('/', (req, res) => {
   // res.sendFile('../2.html', { root: __dirname });
	
res.sendFile(path.resolve('2.html'));
	console.log('pah  : '+path.format({root:'/',name:'2',ext :'.html'}))
});

app.get('/vrml', function (req, res) {
	
res.sendFile(path.resolve('2.html'));
	console.log('path  : '+path.format({root:'/',name:'2',ext :'.vrml'}))
})

//add the router
app.use('/', router);

//app.listen(process.env.PORT || 3000);

//console.log('Running at Port 3000');
