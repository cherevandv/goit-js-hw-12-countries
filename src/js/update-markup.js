import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';
import refs from './refs';
import countryTpl from '../templates/country.hbs';
import countryItemTpl from '../templates/country-item.hbs';

function updateMarkup(data) {
  let markup;
  if(data.length > 10){
    error({
      text: 'Too many matches found. Please enter a more specific query!'
    }); 
    return;
  }
  data.length === 1
    ? (markup = countryTpl(data))
    : (markup = countryItemTpl(data));
  refs.countriesContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;
