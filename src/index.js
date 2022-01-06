import {addContent, clearPage, restorePage, aboutMid, menuMid,
  homebtn, menubtn, aboutbtn, orderbtn} from './firstLoad.js';
import './style.css';

console.log("test");

addContent();

// Add function to the tabs
homebtn.addEventListener('click', () => {
  clearPage();
  restorePage();
})

menubtn.addEventListener('click', () => {
  clearPage();
  menuMid();
})

orderbtn.addEventListener('click', () => {
  clearPage();
  menuMid();
})

aboutbtn.addEventListener('click', () => {
  clearPage();
  aboutMid();
})

