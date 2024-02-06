const express = require('express');
const path = require('path');
const app = express();
const { engine } = require('express-handlebars');
const port = 3000;
const route = require('./routes');


app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended:true 
}));
app.use(express.json())

//template engine
app.engine('handlebars', engine()) //dinh nghia handle bars = function handlebars()
app.set('view engine', 'handlebars') 
app.set('views', path.join(__dirname, '/resources/views'));
app.set('news', path.join(__dirname, '/resources/views'));

// Route init
route(app);


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))