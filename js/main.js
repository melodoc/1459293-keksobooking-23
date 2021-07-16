import {
  build
} from './data-builder/data-builder.js';

import { renderAds } from './markup-data/markup-data.js';

const ads = build();
renderAds(ads);
