import {
  build
} from './data-builder/data-builder.js';
import { renderAds } from './markup-data/markup-data.js';
import { activatePage } from './form-management/activate-page.js';
import { deactivatePage } from './form-management/deactivate-page.js';

const ads = build();
renderAds(ads);

deactivatePage();
activatePage();
