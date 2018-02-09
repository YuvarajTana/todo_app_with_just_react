const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname,'./dist')));

app.get('*',(req,res) => {
	res.sendFile(__dirname + '/dist/app.html');
});

app.listen(port, () => {
	console.log("App is running at port ", port);
});