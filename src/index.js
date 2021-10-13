import _ from 'lodash'
import Lion from './utilities'
import { Nijou } from './utilities'

console.log(Lion.say());
console.log(Nijou(10));

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!!!'];
  element.innerHTML =  _.join(array, ' ');
  return element;
}

document.body.appendChild(component());
