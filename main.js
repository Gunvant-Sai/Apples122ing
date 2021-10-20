x = 0;
y = 0;

var Apple = "";
draw_apple = "";
var to_number = "";
screen_width = "";
screen_height = "";
var x = "";
var y = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload()
{
    Apple = loadImage("apple.png");
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    if (content == "Apple")
    {
        x = Math.floor(Math.random() *700);
        y = Math.floor(Math.random() *400)
        image(Apple, x, y, 50, 50);
    }
}

function setup() {
 canvas = createCanvas(10000,1000);
 screen_width = window.innerWidth;-150
 screen_height = window.innerHeight;-150
 canvas.position();
}

function draw() {
    if (Apple == "set")
    {
        i=1;
        if(i <= to_number)
        {
          i+=1;
          x = math
        }
      document.getElementById("status").innerHTML = to_number + " Apples drawn";
      draw_apple = "";
      speak();
    }
  
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function Number()
{
    to_number = Number(contect);
    if(Number.isInteger(to_number));

}

