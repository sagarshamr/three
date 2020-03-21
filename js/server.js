 const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


router.get('/', (req, res) => {
   // res.sendFile('../2.html', { root: __dirname });
	
res.sendFile(path.resolve('2.html'));
	console.log('pah  : '+path.format({root:'/',name:'2',ext :'.html'}))
});

//add the router
app.use('/', router);
app.listen(process.env.PORT || 3000);

console.log('Running at Port 3000');
