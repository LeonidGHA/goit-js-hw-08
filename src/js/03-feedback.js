import throttle from 'lodash.throttle';
const FEEDBACK_FORM_STATE = 'feedback-form-state';
const textFormEl = document.querySelector('.feedback-form');
const objData = {};

textFormEl.addEventListener('input', throttle(onFormTextElChange, 500));
textFormEl.addEventListener('submit', onResetFormText);

function fillTextInput() {
  const userDataLocStor = getText(FEEDBACK_FORM_STATE);
  if (userDataLocStor === undefined) {
    return;
  }

  const formElements = textFormEl.elements;
  for (const key in userDataLocStor) {
    if (userDataLocStor.hasOwnProperty(key)) {
      formElements[key].value = userDataLocStor[key];
    }
  }
}

function onFormTextElChange(evt) {
  const target = evt.target;

  const formTextEl = target.value;
  const formNameEl = target.name;

  objData[formNameEl] = formTextEl;

  saveText(FEEDBACK_FORM_STATE, objData);
}

function onResetFormText(evt) {
  evt.preventDefault();

  remove(FEEDBACK_FORM_STATE);

  evt.currentTarget.reset();
}

function saveText(key, value) {
  const saveTextEl = JSON.stringify(value);
  localStorage.setItem(key, saveTextEl);
}

function getText(key) {
  const getTextEl = localStorage.getItem(key);
  if (getTextEl !== null) {
    return JSON.parse(getTextEl);
  }
}

function remove(key) {
  localStorage.removeItem(key);
}

fillTextInput();
