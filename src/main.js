import _ from '../node_modules/underscore/underscore-esm.js';
import homeUrl from "./img/home.webp";

let number = [0, 8, 60, 7];
console.log(_.min(number));



const imgEl = document.createElement('img');
document.body.append(imgEl)


imgEl.src = homeUrl;