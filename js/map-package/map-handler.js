import {
  address, form, resetFormButton
} from '../form-package/validate-form.js';

import {
  settingInitialMap,
  mainMarkerSetting,
  similarMarkerSetting
} from '../form-package/prepared-data.js';

import { renderData } from '../data-package/render-data.js';
import { renderDataPins } from './render-data-pins.js';

import {
  activatePage
} from '../form-package/activate-page.js';
import {
  deactivatePage
} from '../form-package/deactivate-page.js';

deactivatePage();

const map = L.map('map-canvas')
  .on('load', activatePage)
  .setView({
    lat: settingInitialMap.LAT,
    lng: settingInitialMap.LNG,
  }, settingInitialMap.ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainMarkerIcon = L.icon({
  iconUrl: mainMarkerSetting.URL,
  iconSize: [mainMarkerSetting.WIDTH, mainMarkerSetting.HEIGHT],
  iconAnchor: [mainMarkerSetting.WIDTH / 2, mainMarkerSetting.HEIGHT],
});

const mainMarker = L.marker({
  lat: settingInitialMap.LAT,
  lng: settingInitialMap.LNG,
}, {
  draggable: true,
  icon: mainMarkerIcon,
});
mainMarker.addTo(map);

const setMainMarkerInitialPosition = () => {
  address.value = `${mainMarker.getLatLng().lat}, ${mainMarker.getLatLng().lng}`;
};
setMainMarkerInitialPosition();

const getMainMarkerCurrentPosition = (evt) => {
  const currentLatitude = evt.target.getLatLng().lat.toFixed(5);
  const currentLongitude = evt.target.getLatLng().lng.toFixed(5);

  address.value = `${currentLatitude}, ${currentLongitude}`;
};

mainMarker.on('moveend', getMainMarkerCurrentPosition);

// Reset Marker and Map Position
const resetMapPosition = () => {
  mainMarker.setLatLng({
    lat: settingInitialMap.LAT,
    lng: settingInitialMap.LNG,
  });
  map.setView({
    lat: settingInitialMap.LAT,
    lng: settingInitialMap.LNG,
  }, settingInitialMap.ZOOM);
};

const resetPage = () => {
  form.reset();
  resetMapPosition();
};

resetFormButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetPage();
  resetMapPosition();
  setMainMarkerInitialPosition();
});


const renderPins = (ads) => {
  const adsPins = renderDataPins(ads);

  adsPins.forEach((ad) => {
    const {
      lat,
      lng,
    } = ad;

    const icon = L.icon({
      iconUrl: similarMarkerSetting.URL,
      iconSize: [similarMarkerSetting.WIDTH, similarMarkerSetting.HEIGHT],
      iconAnchor: [similarMarkerSetting.WIDTH / 2, similarMarkerSetting.HEIGHT],
    });


    const marker = L.marker({
      lat,
      lng,
    }, {
      icon,
    } );
    marker
      .addTo(map)
      .bindPopup(renderData(ad), {
        keepInView: true,
      });
  });
};

export { map, resetPage, renderPins };
