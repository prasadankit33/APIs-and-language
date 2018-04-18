/*var url ="http://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
var api_key="&api-key=3c4b7cd1f26a421ca6a1cdac0e07d6b3";
var query ='tree';
var search = url + query + api_key;
var input ;
*/
var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q="
var query="India";
var api_key="&api-key=99cfea65a5bb30650b3d31eb1713233e:15:73386102";

var input;
var button;


function setup() {
  noCanvas();
  input=createInput('Enter articles to search for');
  button = createButton("Submit");
  button.mousePressed(AskForArticle);
  

}


function AskForArticle()
{
	loadJSON(url+input.value()+api_key, gotData);
}

function gotData(data)
 {
 	var articles = data.response.docs;
 	for(var i=0;i<articles.length;i++)
 	{//console.log(articles.headline.main);
 	createElement('h1',articles[i].headline.main);
 	createElement('p',articles[i].snippet);
 	
 	}
 }	

function draw() {
  
}