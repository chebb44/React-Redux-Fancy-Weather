/* eslint-disable no-undef */
const token =
  'pk.eyJ1IjoiY2hlYmI0NCIsImEiOiJjazdrYWJjajYwMGExM2dwZDNzYmxzanZzIn0.SUKe2sTwtn_WrZMdSE1Wig';

function mapRender(coords) {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiY2hlYmI0NCIsImEiOiJjazdrYWJjajYwMGExM2dwZDNzYmxzanZzIn0.SUKe2sTwtn_WrZMdSE1Wig';
  const map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: coords, // starting position [lng, lat]
    zoom: 1, // starting zoom
    logoPosition: 'top-right',
  });
  map.on('load', function () {
    /* Image: An image is loaded and added to the map. */
    map.loadImage('https://i.imgur.com/MK4NUzI.png', function (error, image) {
      if (error) throw error;
      map.addImage('custom-marker', image);
      /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
      map.addLayer({
        id: 'markers',
        type: 'symbol',
        /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: coords,
                },
              },
            ],
          },
        },
        layout: {
          'icon-image': 'custom-marker',
        },
      });
    });
  });
  return map;
}
export { mapRender, token };
