function initMap() {
    var myLatLng = { lat: -34.397, lng: 150.644 };  
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: myLatLng
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });


    var infoWindow = new google.maps.InfoWindow({
        content: '<h3>My Marker</h3><p>Here is some information about this location.</p>',
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });

    var infoWindow = new google.maps.InfoWindow({
        content: '<h3>My Custom Location</h3><p>Details about this location.</p>'
    });
    
    var marker = new google.maps.Marker({
        position: { lat: -34.397, lng: 150.644 },
        map: map,
        title: 'Click to see details'
    });
    
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });

    var locations = [
        { lat: -34.397, lng: 150.644, title: 'Location 1' },
        { lat: -33.8688, lng: 151.2093, title: 'Location 2' },
        { lat: -35.2809, lng: 149.1300, title: 'Location 3' }
    ];

    locations.forEach(function(location) {
        var marker = new google.maps.Marker({
            position: location,
            map: map,
            title: location.title
        });

        // Optional: Add a click event to zoom to the marker location
        marker.addListener('click', function() {
            map.setCenter(marker.getPosition());
            map.setZoom(12);
        })
    })
}
