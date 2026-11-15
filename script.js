let animals = [{
  name: "Dog",
  sound: "bark!",
  mp3: "sounds/dog-bark.mp3"
},{
  name: "Cat",
  sound: "meow!",
  mp3: "sounds/cat-meow.mp3"
},{
  name: "Bird",
  sound: "chirp!",
  mp3: "sounds/bird-chirp.mp3"
},{
  name: "Frog",
  sound: "ribbit!",
  mp3: "sounds/frog-ribbit.mp3"
}];

let display = document.getElementById("animalName");

for (let i = 0; i < animals.length; i++) {
  
  display.innerHTML += `
  <div>${animals[i].name}</div>`;
}

function findAnimal() {
  let number = document.getElementById("animalFinder").value;
  let result = document.getElementById("result");

  if (number === "") {
    result.innerHTML = "You forgot to enter a number";
  } else if (Number.isInteger(Number(number)) && 
  Number(number) >= 0 && Number(number) < animals.length
  ) {
    let selectedAnimal = animals[Number(number)];
    result.innerHTML = `
    <h3 class="animalH1">${selectedAnimal.name}</h3>
    <p class="animalH2">${selectedAnimal.sound}</p>
    <audio id="bgMusic" src="${selectedAnimal.mp3}"></audio>
    <button id="toggleBtn" class="animalH3">
    <img src="images/sound-icon.jpg" alt="Sound" width="20">
    </button>`;
    

     const music = document.getElementById('bgMusic');
     const btn = document.getElementById('toggleBtn');
     
     btn.addEventListener('click',() => {
      if (music.paused) {
      music.play();
      } else {
        music.pause()
      }
      });

  
  } else {
    result.innerHTML = "Not found."
  }
}