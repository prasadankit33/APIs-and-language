var api = "http://api.giphy.com/v1/gifs/search?q=";
var api_key="&api_key=dc6zaTOxFJmzC&";
var limit = "limit=5";
var button;

function setup()
{
	input = createInput("Search");
	noCanvas();
	button = createButton("Search GIFs");
//	button.mousePressed(searchGIF);
	input.changed(searchGIF);		//triggered after user changes action like press enter
}
var prevLength; 
var images=[];
function searchGIF()
{for(var i=0;i<prevLength;i++)
	splice(images,1,0);
		
 loadJSON(api+input.value()+api_key+limit,gotData);
}

function gotData(giphy)
{
	//console.log(data);
	console.log(giphy.data[0].images.original.url);
	prevLength = giphy.data.length;

		for(var i=0;i<prevLength;i++)
		{
		images[i]=createImg(giphy.data[i].images.original.url);
		console.log(giphy.data[i].images.original.url);
		
		}
	
}


