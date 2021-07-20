import './form-package/validate-form.js';

import { renderPins } from './map-package/map-handler.js';

import { openSuccessPopup, openErrorPopup } from './pop-up-package/pop-up.js';
import { getData } from './api-package/api-handler.js';
import { sendData } from './api-package/api-handler.js';

const SIMILAR_OFFER_COUNT = 10;

getData((offers) => {
  renderPins(offers.slice(0, SIMILAR_OFFER_COUNT));
});

sendData(openSuccessPopup, openErrorPopup);
