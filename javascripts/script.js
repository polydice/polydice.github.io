var bittersMap = (function () {
  var myLatlng = new google.maps.LatLng(25.080803, 121.564737),
  mapCenter = new google.maps.LatLng(25.080803, 121.564737),
  mapCanvas = document.getElementById('map_canvas'),
  mapOptions = {
    center: mapCenter,
    zoom: 13,
    scrollwheel: false,
    draggable: false,
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  },
  map = new google.maps.Map(mapCanvas, mapOptions),
  contentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Polydice, Inc.</h1>'+
    '<div id="bodyContent"'+
    '<p>3F., No.32, Jihu Rd., Neihu Dist., Taipei City 11492</p>'+
    '</div>'+
    '</div>',
  infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 300
  }),
  marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Polydice, Inc.'
  });

  return {
    init: function () {
      map.set('styles', [{
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          { hue: '#ffff00' },
          { saturation: 30 },
          { lightness: 10}
        ]}
      ]);

      infowindow.open(map,marker);
    }
  };
}());

bittersMap.init();
