import { error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});

export default function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.com/v3.1/name/${searchQuery}`).then(res => {
    console.log(res);
    if (res.ok != true) {
      error({ text: 'Empty input field !' });
      return;
    }
    return res.json();
  });
}
