import './form-package/validate-form.js';
import './map-package/map-handler.js';

import { getData } from './api-package/api-handler.js';
import { sendData } from './api-package/api-handler.js';
import { renderPins } from './map-package/map-handler.js';
import { SIMILAR_OFFER_COUNT } from './form-package/prepared-data.js';
import { onFiltersChange } from './filter-package/filter.js';
import { openSuccessPopup, openErrorPopup } from './pop-up-package/pop-up.js';

getData((offers) => {
  renderPins(offers.slice(0, SIMILAR_OFFER_COUNT));
  onFiltersChange(offers);
});

sendData(openSuccessPopup, openErrorPopup);
