import './App.css'

function App() {
  let instructions = document.getElementById("click4note");
  instructions.style.display = "none";
  const fetchJoke = async () => {
  let JokeObject;  
  
  var colors = ['#ff0000', '#00ff00', '#0000ff', '#FFB6C1', '#4876FF', '#BFEFFF', '#A2CD5A', '#F0E68C', '#FFF5EE'	];
  var random_color = colors[Math.floor(Math.random() * colors.length)];
  let buttonElement = document.getElementById('button');
  let box = document.getElementById("Jokes");
  let p = document.getElementById("setup");
  let punchline = document.getElementById("punchline");
  let instructions = document.getElementById("click4note");
  punchline.style.display = "none";
  instructions.style.display = "block"

    await fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(resp => JokeObject = resp)
    .then(data => console.log("Setup:", data))
    .catch((error) => {
      console.log("Error:", error);
    });
    console.log("Joke:", JokeObject.punchline)
    box.style.background = random_color;
    p.innerText = JokeObject.setup
    p.style.background = random_color;
    p.style.color = "black";
    punchline.innerText = JokeObject.punchline
    p.addEventListener("click", () => {
      punchline.style.display = "block";
      buttonElement.disabled = true;
      punchline.addEventListener("click", () => {
        buttonElement.disabled = false;
        p.innerText = "";
        punchline.innerText = "";
        instructions.style.display= "block";
        instructions.style.display = "none";

      })
    });
  };



  return (
    <>
    <div className="App">
      <div id="top">
      <center><div className="header">JOKE-of-the-DAY</div></center>
      <center><p id="click4note">"Click for the Punchline"</p></center>
<br></br>
      <center><button onClick={fetchJoke} id="button">Today's Joke</button></center>
      <div id="Jokes"></div>
      <hr></hr>
      </div>
      <div id="bottom">
      <center><div id="setup"></div>
      <div id="punchline"></div></center>
      </div>
    </div>
    </>
  );
}

export default App;
