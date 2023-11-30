function setup()
{
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");

    canvas.mouseReleased(classifyCanvas);
}


function clearCanvas()
{
    background("white");
}

function draw(){
    stokeWeight(13);
    stoke(0);

    if(mouselsPressed)
    {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas()
{
    classifier.classify(canvas, gotResults);
}

function gotResults(error, results)
{
    if (error) {
        console.error(error);
    }
    console.log(results);
}

document.getElementById('label').innerHTML = "Etiqueta: " + results[0].label;
document.getElementById('confidence').innerHTML = "Precision: " + Math.round(results[0].confidence*100)

uttherThis = new SpeechSynthesisUtterance(results[0].label);
SpeechSynthesis.speak(uttherThis);