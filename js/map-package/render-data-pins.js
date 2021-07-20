export const renderDataPins = (items) => {
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
