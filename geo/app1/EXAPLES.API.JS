function initialize() {
    var myOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-27.463347, 153.02496),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

    var options = {
      position: new google.maps.LatLng(-27.463347, 153.02496),
      icon : "http://goo.gl/1AjgHj"
    };
    var marker = new google.maps.Marker(options);
    marker.setMap(map);
    
    
}

//-------------------------

//marcador con animacion

var marker;

function initialize() {
    var myOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-27.463347, 153.02496),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

    var options = {
      position: new google.maps.LatLng(-27.463347, 153.02496)
    };
    marker = new google.maps.Marker(options);
    marker.setMap(map);

    var button = document.getElementById("button");
    button.addEventListener('click', bounce);
}

function bounce() {
    // Is the marker already animating?
    if (marker.getAnimation()) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

//----------------------------------------------

//marcador con el punto de calle

function initialize() {
    var myOptions = {
        position: new google.maps.LatLng(-27.46841, 153.00589),
        pov: {
            heading: -68.875,
            pitch: 12,
            zoom: 1
        }
    };
    
    
    var pano = new google.maps.StreetViewPanorama(document.getElementById('map_canvas'), myOptions);
    
    new google.maps.Marker({
    position: new google.maps.LatLng(-27.468271, 153.005953),
    map: pano
});
    
    
}

//---------------------------------------------------------------

// trasar una ruta

function initialize() {
    var myOptions = {
      zoom: 5,
      center: new google.maps.LatLng(-31.7, 152.32),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

    var points = [
      new google.maps.LatLng(-33.85217, 151.207851),
      new google.maps.LatLng(-29.630771, 149.39209),
      new google.maps.LatLng(-31.034108, 151.589355),
      new google.maps.LatLng(-27.44979, 153.039551)
    ];

    var polyline = new google.maps.Polyline({
      path: points,
      strokeColor: "#FF0000",
      strokeWeight: 2
    });
    polyline.setMap(map);
}

// ENCERRAR COMO UN POLIGONO A UNA SIUDAD O A UN PLACE

function initialize() {
    var myOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-34.397, 150.644),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

    var paths = [
      new google.maps.LatLng(-22.998852,107.490234),
      new google.maps.LatLng(-37.160317,112.236328),
      new google.maps.LatLng(-35.88905,130.517578),
      new google.maps.LatLng(-44.339565,147.041016),
      new google.maps.LatLng(-27.683528,159.960938),
      new google.maps.LatLng(-3.776559,141.416016)
    ];
    var polygon = new google.maps.Polygon({
      paths: paths,
      fillColor: "#00FF00",
      fillOpacity: 0.5
    });
    polygon.setMap(map);
}

// JSON JSONP

var json = '{"key": "value", "an_array": [1, 2, 3]}';

var object = JSON.parse(json);
window.console.log(object.key);
window.console.log(object.an_array[any]);

//------------------------------------------------------------------
//GUIADA DE LA API DE GOOGLE PLUS


function initialize() {
  // Make a request to the API. '/plus' redirects to:
  // https://www.googleapis.com/plus/v1/people/113590416237988391252/activities/public?key=key
    // el ajax sirve para visitar esa url de google plus y que me devuelva el dato en JSON
  jQuery.ajax({
      url: '/plus',
      dataType: 'jsonp',
      success: requestComplete
  });
  // API DE GOOGLE PLUS PARA SABER LA HUBICACION DE CADA POST
  // This is the format the G+ API returns locations in.
var geolocation = "6.235925 -75.575137";

// Split it into two parts and make a LatLng object.
var parts = geolocation.split(' ');
var latLng = new google.maps.LatLng(parts[0], parts[1]);
  
  
   var myOptions = {
      zoom: 8,
      center: new google.maps.LatLng(parts[0], parts[1]),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  
  var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

    var options = {
      position: new google.maps.LatLng(parts[0], parts[1])
    };
  
    marker = new google.maps.Marker(options);
    marker.setMap(map);
  
  
}

function requestComplete(response) {
  window.console.log(response);
}


//--------------------------


// VENTANAS INFORMATIVAS

function initialize() {
    var myOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-34.397, 150.644),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

    var infowindowOptions = {
      position: new google.maps.LatLng(-34.397, 150.644),
      content: 'Oh look, an info window!'
    };
    var infowindow = new google.maps.InfoWindow(infowindowOptions);
    infowindow.open(map);
    //infowindow.open(map, marker);

    var markerOptions = {
      position: new google.maps.LatLng(-35, 150.644)
    };
    var marker = new google.maps.Marker(markerOptions);
    marker.setMap(map);
}


//-------------------------------

//Geocoding , Geocoder asynchronous 
// callback ... de regreso... funcion de respuesta... una funcion pasada por otra funcion
//https://developers.google.com/maps/documentation/javascript/reference?hl=es&csw=1#Geocoder


function initialize() {

//Hay muchos datos de geolocalización accesibles

    var myOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-34.397, 150.644),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
    var geocoder = new google.maps.Geocoder();

    var request = {
      address: "Calle 62 # 80-2 a 80-100, Medellín, Antioquia, Colombia"
    };
    
    geocoder.geocode(request, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
        map.panTo(marker.getPosition());
      } else {
        window.console.log('failed to geocode address: '  + status);
      }
    });
}

//-------------------------------------------
// lugares https://developers.google.com/maps/documentation/javascript/reference?hl=es&csw=1#DirectionsService
//https://developers.google.com/maps/documentation/javascript/reference?hl=es&csw=1#DirectionsRenderer
//https://developers.google.com/maps/documentation/javascript/reference?hl=es&csw=1#DirectionsRendererOptions

function initialize() {
    // The map's center and zoom will be set by the DirectionsRenderer.
    window.map = new google.maps.Map(document.getElementById('map_canvas'), {
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    // Though the map and panel are set on the renderer, nothing will display
    // until the DirectionsResult is set.
    
    var op={
        
        draggable:true
    };
    
    var directionsRenderer = new google.maps.DirectionsRenderer(op);
    directionsRenderer.setMap(map);
    directionsRenderer.setPanel(document.getElementById('panel'));

    // Driving directions between Pyrmont and Canberra.
    var request = {
      origin: "Sydney",
      waypoints: [{
        location: new google.maps.LatLng(-35.3091577518581, 149.125019515991),
        stopover: false
      }],
      destination: "Melbourne",
      travelMode: google.maps.TravelMode.DRIVING
    };

    // Makes a request to the directions server and sets the result on the
    // DirectionsRenderer for display.
    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(result);
      } else {
        window.console.log('failed to get directions: '  + status);
      }
    });
}

//----------------------------------------------------------------------------


// variables con alcanze de bloque
//https://developers.google.com/maps/documentation/javascript/reference?hl=es&csw=1#InfoWindow

function initialize() {
    var myOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-34.397, 150.644),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

    var infowindowOptions = {
      position: new google.maps.LatLng(-34.397, 150.644),
      content: 'Why do I always open at the last marker?'
    };
    var infowindow = new google.maps.InfoWindow(infowindowOptions);
    marker=[];
    for (var i = 0; i < 5; ++i) {
      var markerOptions = {
        position: new google.maps.LatLng(-34.397, 149.5 + 0.5 * i)
      };
      marker[i] = new google.maps.Marker(markerOptions);
      marker[i].setMap(map);

      // Opens info window when marker is clicked.
      // LLAMADAS DE OBJETOS SI DAN REPETIDAS EN FOR... AÑADIDAS DE EVENTOS NO SIRVE PORQUE SIEMPRE TIRA A EL U LTIMO ADDLISTENNER
      google.maps.event.addListener(marker[i], 'click', function() {
        infowindow.open(map, marker[i]);
      });
    }
}

//-------------------------------------------------------------------------------------

//es un problema de scope (ámbito de variable)
//En javascript no existe el ámbito de bloque
function initialize() {
    var myOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-34.397, 150.644),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

    var infowindowOptions = {
      position: new google.maps.LatLng(-34.397, 150.644),
      content: 'It now works!'
    };
    var infowindow = new google.maps.InfoWindow(infowindowOptions);

    for (var i = 0; i < 5; ++i) {
      var markerOptions = {
        position: new google.maps.LatLng(-34.397, 149.5 + 0.5 * i)
      };
      var marker = new google.maps.Marker(markerOptions);
      marker.setMap(map);

      addListenerToMarker(marker, map, infowindow);
    }
}

// Opens info window when marker is clicked.
function addListenerToMarker(marker, map, infowindow) {
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });
}



//-------------------------------------------------------------------------------------

// LA MIA


function initialize() {
    var myOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-34.397, 150.644),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

    var infowindowOptions = {
      position: new google.maps.LatLng(-34.397, 150.644),
      content: 'Why do I always open at the last marker?'
    };
    var infowindow = new google.maps.InfoWindow(infowindowOptions);

    for (var i = 0; i < 5; ++i) {
      var markerOptions = {
        position: new google.maps.LatLng(-34.397, 149.5 + 0.5 * i)
      };
      var marker = new google.maps.Marker(markerOptions);
      marker.setMap(map);
      lala(marker,map,infowindow);
      
      
    }


    function lala (marker,map,infowindow){

      // Opens info window when marker is clicked.
      // SI NO LO HAGO AFUERA SIEMPRE LLAMARA A EL MISMO LISTENER EVENTO CON EL ULTIMO MARKER QUE FUE PASADO COMO PARAMETRO, AQUI ENTONCES LE HAGO A CADA MARKER POR SEPARADO CON EL LISTENER
      // ASI REPETIRA SOLO LA FUNCION Y LA FUNCION ARA SU TRABAJO LLAMANDO UNA Y OTRA VEZ A CADA LISTENER


      google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
      });
    }



}


//--------------------------------------------------------------------------------------------------------


// PONER A CADA MARCADOR UN MENSAJE DIFERENTE
function initialize() {
    var myOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-34.397, 150.644),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);



    for (var i = 0; i < 5; ++i) {
        
      var infowindowOptions = {
      position: new google.maps.LatLng(-34.397, 150.644),
      content: 'Marcador #'+i
    };
    var infowindow = new google.maps.InfoWindow(infowindowOptions);
        
        
      var markerOptions = {
        position: new google.maps.LatLng(-34.397, 149.5 + 0.5 * i)
      };
      var marker = new google.maps.Marker(markerOptions);

      marker.setMap(map);
      //infowindow.content='Marcador #'+i; ESTA PASANDO LO MISMO TOMA EL ULTIMO VALOR 4 DE LA I
      // Utilizaban el mismo infowindow todos y al final tomaba el ultuimo parametro del infowindow
      lala(marker,map,infowindow,i);
      
      
    }


    function lala (marker,map,infowindow,i){

      // Opens info window when marker is clicked.
      // SI NO LO HAGO AFUERA SIEMPRE LLAMARA A EL MISMO LISTENER EVENTO CON EL ULTIMO MARKER QUE FUE PASADO COMO PARAMETRO, AQUI ENTONCES LE HAGO A CADA MARKER POR SEPARADO CON EL LISTENER
      // ASI REPETIRA SOLO LA FUNCION Y LA FUNCION ARA SU TRABAJO LLAMANDO UNA Y OTRA VEZ A CADA LISTENER

      
      google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
      });
    }



}


var beaches = [
  ['Bells Beach, Torquay, Victoria', -38.363149, 144.286794],
  ['Bondi Beach, New South Wales', -33.890542, 151.274856],
  ['Cottesloe Beach, Cottesloe, Western Australia', -31.995599, 115.750495],
  ['Manly Beach, New South Wales', -33.80010128657071, 151.28747820854187],
  ['Noosa Heads, Queensland', -26.396175, 153.089397],
  ['Scarborough Beach, Australia', -34.27458, 150.959348],
  ['St Kilda Beach', -34.738078, 138.532282],
  ['Surfers\' Paradise, Gold Coast, Queensland', -28.00228, 153.431052]
];

//-------------------------------------------------------------------------------------

//CRISTAL LAB
        var map;
        var latitud;
        var longitud;
        var precision;
        
        $(document).ready(function() {
            localizame();            
        });
        
        function localizame() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(coordenadas, errores);
            }else{
                alert('Oops! Tu navegador no soporta geolocalización. Bájate Chrome, que es gratis!');
            }
        }
        
        function coordenadas(position) {
            latitud = position.coords.latitude;
            longitud = position.coords.longitude;
            precision = position.coords.accuracy;  
            cargarMapa();
            alert("Datos con una precisión de " + precision/1000 + " km, " + precision + " metros");
        }
        
        function errores(err) {
            if (err.code == 0) {
              alert("Oops! Algo ha salido mal");
            }
            if (err.code == 1) {
              alert("Oops! No has aceptado compartir tu posición");
            }
            if (err.code == 2) {
              alert("Oops! No se puede obtener la posición actual");
            }
            if (err.code == 3) {
              alert("Oops! Hemos superado el tiempo de espera");
            }
        }
         
        function cargarMapa() {
            var latlon = new google.maps.LatLng(latitud,longitud);
            var myOptions = {
                zoom: 17,
                center: latlon,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map($("#map_canvas").get(0), myOptions);
            
            var coorMarcador = new google.maps.LatLng(latitud,longitud);
                
            var marcador = new google.maps.Marker({
                position: coorMarcador,
                map: map,
                title: "Dónde estoy?"
            });
            
        }
//------------------------------------------------------------------------------

//async


 
//Establece si la petición será asíncrona o no. De forma predeterminada el valor es true. 
//Debe tener en cuenta que si la opción se establece en false, la petición bloqueará la ejecución 
//de otros códigos hasta que dicha petición haya finalizado.






//------------------------------------------------------------------------------------


$.ajax({ 
    url: "urlservidor.php", 
    datType: "datos", 
    data: "bar=" + foo,

    // recivimos el dato tipo json
    success: function(json){
        // accedemos como si fuese un objeto
        // a los valores
        alert (json.nodo);
    }
});

//pero esta bien. me parece bueno para comenzar ;)


//--------------------------------------------------------------------------------------------