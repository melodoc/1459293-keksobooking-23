import { resetPage } from '../map-package/map-handler.js';
import { form } from '../form-package/validate-form.js';
import { showAlert } from '../utils/events.js';

const getData = (onSuccess) => {
  console.info('я getData');
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        showAlert('Не удалось загрузить данные');
      }
    })
    .then((offers) => {
      onSuccess(offers);
    })
    .catch(() => {
      showAlert('Не удалось загрузить данные');
    });
};

const sendData = (onSuccess, onFail) => {
  console.info('я sendData');
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(
      'https://23.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          onSuccess();
          resetPage();
        } else {
          onFail();
        }
      })
      .catch(() => onFail());
  });
};

export { getData, sendData };
