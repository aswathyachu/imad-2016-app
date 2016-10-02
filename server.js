var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var Articleone={
    title:'aswathybabu',
    heading:'Article-one',
    date: 'Oct 1 2016',
   content:`
<p>
        This is the first article of the project.This is the first article of the project.This is the first article of the project.This is the first article of the project.This is the first article of the project.This is the first article of the project.This is the first article of the project.
</p>
<p>
        This is the first article of the project.This is the first article of the project.This is the first article of the project.This is the first article of the project.This is the first article of the project.This is the first article of the project.This is the first article of the project.
</p>
<p>
        This is the first article of the project.This is the first article of the project.This is the first article of the project.This is the first article of the project.This is the first article of the project.This is the first article of the project.This is the first article of the project.
      content:'
 </p> `
};
function createTemplate (data)
{
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;

var  htmltemplate=`
    <html>
    <head>
<title>${title}
</title>
</head>
        <body>
             <div class="container">
        <div>
            <a href='/home'></a>
            </div>
            <h3>
            $ {heading}
        </h3>
    </div>
        <div>
            $ {date}
        </div>
<div>
   
    <p>
        $ {content}
     </p>
    </div>
    </body>
    </html>
';
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function (req,res) {
    res.send(create Template(Articleone));
    });
 
app.get('/article-two',function (req,res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));

});
app.get('/article-three',function (req,res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
    });

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
