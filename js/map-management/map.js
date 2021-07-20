import {
  address
} from '../form-management/validate-form.js';

import {
  settingInitialMap,
  mainMarkerSetting,
  similarMarkerSetting
} from '../form-management/prepared-data.js';

import {
  build
} from '../data-builder/data-builder.js';

import { renderData } from '../data-builder/render-data.js';

import {
  activatePage
} from '../form-management/activate-page.js';
import {
  deactivatePage
} from '../form-management/deactivate-page.js';

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

const renderDataPins = (items) => {
  const points = [];
  items.forEach((item) => {
    const point = {
      avatar: item.author.avatar,
      title: item.offer.title,
      address: item.offer.address,
      price: item.offer.price,
      type: item.offer.type,
      rooms: item.offer.rooms,
      guests: item.offer.guests,
      checkin: item.offer.checkin,
      checkout: item.offer.checkout,
      features: item.offer.features,
      photos: item.offer.photos,
      lat: item.location.lat,
      lng: item.location.lng,
      description: item.offer.description,
    };
    points.push(point);
  });
  return points;
};

const ads = build(5);
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
