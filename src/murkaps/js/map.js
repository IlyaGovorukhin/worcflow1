var map;
function initialize() {
    var Options = {
        center: new google.maps.LatLng(55.570042616576345,  37.47631905023195),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map3d"), Options);

    var image = new google.maps.MarkerImage('../../img/mark.png',
        new google.maps.Size(60, 80),
        new google.maps.Point(0,0),
        new google.maps.Point(16, 35)
    );

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng('55.570042616576345', ' 37.47631905023195'),
        map: map,
        title: 'Marker Title',
        icon: image
    });
}
google.maps.event.addDomListener(window, 'load', initialize);