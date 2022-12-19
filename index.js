 // ***Initializing map***
    var myMap = L.map('myMap').setView([51.3127, 9.4797], 14);

        // **Create Map Layer Variables**
        //OSM Layer
        var osMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });
        osMap.addTo(myMap)

        //Gray Map Layer - JawgLab
        var grayMap = L.tileLayer('https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
            attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            minZoom: 0,
            maxZoom: 22,
            subdomains: 'abcd',
            accessToken: '3JFMETKIqaIYYFosu9t5O4A40sp2kuKRPreDMpeQuxf4czv3BBmNjMv6ROYeR3fp'
        });
        grayMap.addTo(myMap)

        //Gray Map Layer - CartoDB
        var grayMap2 = L.tileLayer(
          "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
          {
            attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: "abcd",
            maxZoom: 20,
        });
        //grayMap2.addTo(myMap)

        // ***New Marker***

        //Create Personalized Marker
        var myIcon = L.icon({
            iconUrl: 'images/yellow_marker.png',
            iconSize: [35, 35],
        });

        //Add Created marker as an Option
        var newMarker = L.marker([51.3127, 9.4797],{icon:myIcon, draggable:true})
        var popup = newMarker.bindPopup('Kassel Center'+ newMarker.getLatLng()).openPopup
            newMarker.addTo(myMap);

        console.log(newMarker.toGeoJSON())
        

        // ***Layer Switch***

        // Add GeoJSON data as layers
        var stops = L.geoJSON(stopsJSON);
        var route = L.geoJSON(routeJSON);
            stops.addTo(myMap)
            route.addTo(myMap)

        //Create object and add layers as KVPs
        var baseMaps = {
            "OpenStreetMap": osMap,
            "JawgLab Gray": grayMap,
            "CartoDB Gray":grayMap2
        };
        

        //Add marker as overlay
        var overlayMaps = {
            "Marker": newMarker,
            "Route": route,
            "Stops": stops
        };



        var LayerSwitch = L.control.layers(baseMaps, overlayMaps, {collapsed: false})
            LayerSwitch.addTo(myMap);


        //***Leaflet Events***/

        //Get coordinates of mouse position and add to map view 
        myMap.on('mousemove', function(e){
            document.getElementsByClassName('coordinate')[0].innerHTML = "lat: " + e.latlng.lat +" "+ "lng: " + e.latlng.lng;

            //console.log("lat: " + e.latlng.lat, "lng: " + e.latlng.lng)
        })


        //***Style Customization***/
        
        

        
