import validator from 'validator';
import { createError } from './createError';

// validate search form //
const searchForm = document.querySelector('[data-search-form]');
const searchInput = document.querySelector('[data-search-field]');

searchForm.addEventListener('submit', validateSearchForm);

function validateSearchForm(e) {
  e.preventDefault();
  const isValidSearch = validator.isAlphanumeric(searchInput.value);

  createError(
    isValidSearch,
    searchForm,
    'error-search',
    'Вводити можна тільки букви та числа'
  );
}

// validate subscribe form //

const subscribeForm = document.querySelector('[data-subscribe-form]');
const emailField = document.querySelector('[data-email]');

subscribeForm.addEventListener('submit', validateEmail);

function validateEmail(e) {
  e.preventDefault();
  const isEmail = validator.isEmail(emailField.value);

  createError(isEmail, subscribeForm, 'error-email', 'Ввeдіть справжній email');
}
