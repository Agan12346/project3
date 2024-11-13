function initMap() {
  var myLatLng = { lat: -34.397, lng: 150.644 };  
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: myLatLng
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Biggest Wonder!'
  });

  var infoWindow = new google.maps.InfoWindow({
    content: '<h3>Wonder 1</h3><p>Some pretty location 1.</p>',
  });

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });

  var infoWindow = new google.maps.InfoWindow({
    content: '<h3>Wonder 2</h3><p>Some pretty location 2.</p>'
  });
  
  var marker = new google.maps.Marker({
    position: { lat: -34.397, lng: 150.644 },
    map: map,
    title: 'More details'
  });
  
  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });

  var locations = [
    { lat: -39.409, lng: 152.477, title: 'Another pretty location 1' },
    { lat: -35.2987, lng: 159.134, title: 'Another pretty location 2' },
    { lat: -20.234, lng: 157.3984, title: 'Another pretty location 3' }
  ];

  locations.forEach(function(location) {
    var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: location.title
    });

    marker.addListener('click', function() {
      map.setCenter(marker.getPosition());
      map.setZoom(8);
    })
  })
}
