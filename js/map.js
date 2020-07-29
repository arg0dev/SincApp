$(function () {
    var mapDiv = document.getElementById("map");
    /// Set control options for map
    var zoptions = {
        position: google.maps.ControlPosition.TOP_RIGHT,
        style: google.maps.ZoomControlStyle.SMALL
    };
    /// Position of map using coord that were passed else do nothing.
    var pos = new google.maps.LatLng(40.716948, -74.003563);
    /// Set basic map options using above control options
    var options = {
        zoom: 10,
        zoomControlOptions: zoptions,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        center: pos
    };
    this.map = new google.maps.Map(mapDiv, options);
})