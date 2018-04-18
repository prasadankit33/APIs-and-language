var input;
var button;
var lexicon;

function setup() {

noCanvas();
lexicon = new RiLexicon();
input = createInput("Text");
button = createButton("Submit");
button.mousePressed(processRita);
input.size(300); 
}
function processRita()
{
	var s = input.value();
	var rs = new RiString(s);	//new RitaString
	var words = rs.words();
	var pos = rs.pos(); 	//parts of speech

	console.log(pos);		
	console.log(words);

	var output = '';
	for(var i=0;i<words.length;i++)
	{
		if(pos[i] ==='nn')
		{
			output +=lexicon.randomWord('nn');
		}
		else 
		output += words[i];
		output += " ";
	}

	//createP(s);
	createP(output);
}

function draw() {
  
}