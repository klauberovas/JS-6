// vrátí null
// const containerElm = document.body.querySelector('.kontejner');
// document.body.innerHTML += containerElm;
//------------------------------
// const containerElm = document.body.querySelector('.container');
// // vrátí undefined
// document.body.innerHTML += containerElm.classList.add('dark');

const containerElm = document.body.querySelector('.container');

const nastavStyl = () => {
  containerElm.style.backgroundColor = 'red';
  containerElm.style.padding = '1rem';
  containerElm.style.textAlign = 'center';
  //return undefined si přida JS samo
};

containerElm.innerHTML += nastavStyl();
