
var url1 = "http://api.wordnik.com:80/v4/word.json/";


var url2 = "/definitions?limit=5&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

var link;
var input;
var button;
var search;
var word = "tree";

function setup()
{noCanvas();
/*link = createA('#',word);
link.mousePressed(askWordnik);
*/
input = createInput(word);


button = createButton("Search defintion");
button.mousePressed(askWordnik);
}
function askWordnik()
{
 loadJSON(url1+input.value()+url2,gotData);
}
var result;
function gotData(data)
{result =data[0].text;
 console.log(result);
 createP(result);
  //createP(word);
 //console.log(data);
}

function draw()
{
  background(51);
 {//word = result;
 //createP(word,50,20);
 }
}