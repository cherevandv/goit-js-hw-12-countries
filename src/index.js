import './styles.css';
import debounce from 'lodash.debounce';
import refs from './js/refs';
import fetchCountries from './js/fetchCountries';
import updateMarkup from './js/update-markup';


refs.input.addEventListener('input', debounce(onInput, 500));

function onInput (event){
  const nameCountry = event.target.value;

    refs.countriesContainer.innerHTML = '';
  
    if(nameCountry===''){
       return
    }

    fetchCountries(nameCountry).then(updateMarkup);
}