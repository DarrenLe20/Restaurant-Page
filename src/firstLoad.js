import Icon from "./menu.jpeg";
const homebtn = document.createElement("button");
const menubtn = document.createElement("button");
const aboutbtn = document.createElement("button");
const orderbtn = document.createElement('button');

// Homepage function
function addContent() {
  const page = document.querySelector('#content');
  // Create sections of the page
  const header = document.createElement('div');
  header.classList.add('header');

  const mid = document.createElement('div');
  mid.classList.add('mid');

  const footer = document.createElement('div');
  footer.classList.add('footer');

  page.appendChild(header);
  page.appendChild(mid);
  page.appendChild(footer);
  console.log("Page structure added: Header - Mid - Footer");

  // Header content
  homebtn.textContent = "HOME";
  menubtn.textContent = "MENU";
  aboutbtn.textContent = "ABOUT";
  header.appendChild(homebtn).classList.add("headerBtn");
  header.appendChild(menubtn).classList.add("headerBtn");
  header.appendChild(aboutbtn).classList.add("headerBtn");

  // Footer content
  const footInfo = document.createElement('div');
  footInfo.textContent = "Property of Darren Le";
  footInfo.classList.add('footInfo');
  footer.appendChild(footInfo);

  // Main content
  const slogan = document.createElement('div')
  slogan.textContent ="Generic American Diner";
  slogan.classList.add('slogan');
  mid.appendChild(slogan)

  const slogan2 = document.createElement('div')
  slogan2.textContent ="Classics 50s diner experience";
  slogan2.classList.add('slogan2');
  mid.appendChild(slogan2)

  orderbtn.textContent = "ORDER NOW!";
  mid.appendChild(orderbtn).classList.add('orderBtn');
}

// Delete content of mid
function clearPage() {
  const mid = document.querySelector('.mid')
  while (mid.firstChild) {
    mid.removeChild(mid.firstChild);
  }
  mid.classList.remove('aboutVersion');
  mid.classList.remove('menuVersion');
}

// Restore content of mid 
function restorePage() {
  const mid = document.querySelector('.mid')
  const slogan = document.createElement('div')
  slogan.textContent ="Generic American Diner";
  slogan.classList.add('slogan');
  mid.appendChild(slogan)

  const slogan2 = document.createElement('div');
  slogan2.textContent ="Classics 50s diner experience";
  slogan2.classList.add('slogan2');
  mid.appendChild(slogan2)

  const orderbtn = document.createElement('button');
  orderbtn.textContent = "ORDER NOW!";
  mid.appendChild(orderbtn).classList.add('orderBtn');
}

// Menu function
function menuMid() {
  const mid = document.querySelector(".mid");
  mid.classList.add('menuVersion');
  // Add the icon
  const menuicon =  new Image();
  menuicon.src = Icon;
  mid.appendChild(menuicon).classList.add('menuIcon');
  // Menu
  const menu = document.createElement('div')
  menu.classList.add('menu');

  const starters = document.createElement('div');
  const startermenu = document.createElement('div');
  const startertitle = document.createElement('p');
  startertitle.textContent = 'Starters';
  const starteritems = document.createElement('div');
  const starter1 = document.createElement('p');
  starter1.textContent = "Starter 1 .................................................................................................................................................................. $5.00";
  const starter2 = document.createElement('p');
  starter2.textContent = "Starter 2 .................................................................................................................................................................. $3.00";

  const entrees = document.createElement('div');
  const entreemenu = document.createElement('div');
  const entreetitle = document.createElement('p');
  entreetitle.textContent = 'Burgers';
  const entreeitems = document.createElement('div');
  const entree1 = document.createElement('p');
  entree1.textContent = "Burger 1 .................................................................................................................................................................. $15.00";
  const entree2 = document.createElement('p');
  entree2.textContent = "Burger 2 .................................................................................................................................................................. $13.00";
  const entree3 = document.createElement('p');
  entree3.textContent = "Burger 2 .................................................................................................................................................................. $16.00";

  const shakes = document.createElement('div');
  const shakemenu = document.createElement('div');
  const shaketitle = document.createElement('p');
  shaketitle.textContent = 'Shakes';
  const shakeitems = document.createElement('div');
  const shake1 = document.createElement('p');
  shake1.textContent = "Shake 1 .................................................................................................................................................................. $9.00";
  const shake2 = document.createElement('p');
  shake2.textContent = "Shake 2 .................................................................................................................................................................. $11.00";
  const shake3 = document.createElement('p');
  shake3.textContent = "Shake 2 .................................................................................................................................................................. $10.00";

  // Append stuff
  mid.appendChild(menu);
  menu.appendChild(starters);
  starters.appendChild(startermenu)
  startermenu.appendChild(startertitle).classList.add("sectionTitle");
  startermenu.appendChild(starteritems).classList.add('allitems');
  starteritems.appendChild(starter1).classList.add('item');
  starteritems.appendChild(starter2).classList.add('item');

  menu.appendChild(entrees);
  entrees.appendChild(entreemenu)
  entreemenu.appendChild(entreetitle).classList.add("sectionTitle");
  entreemenu.appendChild(entreeitems).classList.add('allitems');
  entreeitems.appendChild(entree1).classList.add('item');
  entreeitems.appendChild(entree2).classList.add('item');
  entreeitems.appendChild(entree3).classList.add('item');

  menu.appendChild(shakes);
  shakes.appendChild(shakemenu);
  shakemenu.appendChild(shaketitle).classList.add("sectionTitle");
  shakemenu.appendChild(shakeitems).classList.add('allitems');
  shakeitems.appendChild(shake1).classList.add('item');
  shakeitems.appendChild(shake2).classList.add('item');
  shakeitems.appendChild(shake3).classList.add('item');
  
}

// About function
function aboutMid() {
  const mid = document.querySelector('.mid');
  mid.classList.add('aboutVersion')
  const about = document.createElement('div');
  about.textContent = "About Us"
  mid.appendChild(about).classList.add('about');
  const aboutinfo =  document.createElement('div');
  const about1 = document.createElement('p');
  const about2 = document.createElement('p');
  about1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum id venenatis a condimentum vitae. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Feugiat in ante metus dictum at tempor. Consectetur lorem donec massa sapien faucibus et molestie. Nibh mauris cursus mattis molestie a. Est ultricies integer quis auctor elit sed vulputate. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien.";
  about2.textContent = "Posuere urna nec tincidunt praesent semper feugiat nibh sed. Vitae congue eu consequat ac felis donec et odio pellentesque. Eget aliquet nibh praesent tristique magna sit amet purus. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Lectus proin nibh nisl condimentum id venenatis a condimentum. Eget gravida cum sociis natoque penatibus. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Quam viverra orci sagittis eu.";
  mid.appendChild(aboutinfo).classList.add('aboutinfo');
  aboutinfo.appendChild(about1);
  aboutinfo.appendChild(about2);
}

export {
  addContent,
  clearPage,
  restorePage,
  aboutMid,
  menuMid,
  homebtn,
  menubtn,
  aboutbtn,
  orderbtn
};