const rock = document.getElementById("Pierre");
const paper = document.getElementById("Papier");
const scissors = document.getElementById("Ciseaux");
const h2 = document.querySelector("h2");
const p = document.getElementById("result");
const win = document.querySelector("h3");
const loose = document.querySelector("h4");
const ratio = document.getElementById("ratio");
console.log(ratio);

let Rpc = ["Pierre", "Papier", "Ciseaux"];
let counterWin = 0;
let counterLoose = 0;
let counter = 0;
let round = 0;

rock.addEventListener("click", (e) => {
  let RandomChoice = Math.floor(Math.random() * 3);
  if (e.target.id === Rpc[RandomChoice]) {
    p.textContent = `Egalité`;
  } else if (Rpc[RandomChoice] === "Ciseaux") {
    p.textContent = `Gagnée`;
    counterWin++;
  } else if (Rpc[RandomChoice] === "Papier") {
    p.textContent = `Perdu`;
    counterLoose++;
  }
  counter++;
  h2.innerHTML = `Choix de l'ordinateur : ${Rpc[RandomChoice]}`;
  win.textContent = `Manche gagné par vous : ${counterWin}`;
  loose.innerHTML = `Manche gagné par l'ordinateur : ${counterLoose}`;
  counter = counterWin / counterLoose;
  round = counter.toFixed(2);
  ratio.innerHTML = `Ratio victoire / défaite : ${round}`;
});

paper.addEventListener("click", (e) => {
  let RandomChoice = Math.floor(Math.random() * 3);
  if (e.target.id === Rpc[RandomChoice]) {
    p.textContent = `Egalité`;
  } else if (Rpc[RandomChoice] === "Pierre") {
    p.textContent = `Gagnée`;
    counterWin++;
  } else if (Rpc[RandomChoice] === "Ciseaux") {
    p.textContent = `Perdu`;
    counterLoose++;
  }
  h2.innerHTML = `Choix de l'ordinateur : ${Rpc[RandomChoice]}`;
  win.textContent = `Manche gagné par vous : ${counterWin}`;
  loose.innerHTML = `Manche gagné par l'ordinateur : ${counterLoose}`;
  counter = counterWin / counterLoose;
  round = counter.toFixed(2);
  ratio.innerHTML = `Ratio victoire / défaite : ${round}`;
});

scissors.addEventListener("click", (e) => {
  let RandomChoice = Math.floor(Math.random() * 3);
  if (e.target.id === Rpc[RandomChoice]) {
    p.textContent = `Egalité`;
  } else if (Rpc[RandomChoice] === "Papier") {
    p.textContent = `Gagnée`;
    counterWin++;
  } else if (Rpc[RandomChoice] === "Pierre") {
    p.textContent = `Perdu`;
    counterLoose++;
  }
  h2.innerHTML = `Choix de l'ordinateur : ${Rpc[RandomChoice]}`;
  win.textContent = `Manche gagné par vous : ${counterWin}`;
  loose.innerHTML = `Manche gagné par l'ordinateur : ${counterLoose}`;
  counter = counterWin / counterLoose;
  round = counter.toFixed(2);
  ratio.innerHTML = `Ratio victoire / défaite : ${round}`;
});
