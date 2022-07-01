import { error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});

import fetchCountries from './fetchCountries';
import countriesList from './partials/countriesList';
import country from './partials/country';

const input = document.querySelector('#inputVal');
const htmlList = document.querySelector('#list');
const debounce = require('lodash.debounce');

input.addEventListener(
  'input',
  debounce(event => {
    document.querySelector('#list').innerHTML = '';
    let contryName = event.target.value;
    fetchCountries(contryName).then(dataFn);
  }, 500)
);

function dataFn(array) {
  if (array.length < 2) {
    console.log('1', array[0]);

    htmlList.insertAdjacentHTML('beforeend', country(array[0]));
  }
  if (array.length > 1 && array.length <= 10) {
    htmlList.insertAdjacentHTML('beforeend', countriesList(array));
  }
  if (array.length > 10) {
    error({ text: 'Too many matches found. Please enter a more specific query !' });
  }
}
