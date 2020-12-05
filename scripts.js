let counter = 0;
const PATHS = [
  'url("images/logo_gray.png")',
  'url("images/logo_red.png")',
  'url("images/logo.png")',
];

const changeFilter = () => {
  const logoElement = document.getElementById('logo');
  logoElement.style.backgroundImage = PATHS[counter % PATHS.length];
  counter += 1;
}


const mainElement = document.getElementById('main');
mainElement.addEventListener('click', changeFilter);