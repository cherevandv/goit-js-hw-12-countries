import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { info } from '@pnotify/core';

function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(res => res.json())
    .catch((err => {
      info({
        text: 'There is no such country.'
      });
      console.log(err);
    }));
}
//не работает catch

export default fetchCountries;
