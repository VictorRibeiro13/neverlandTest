const hamburguer = document.querySelector(".hmbgr-icon");
const contato = document.querySelector(".contato");


$(document).ready(() => {

    hamburguer.addEventListener('click', () => {
        const mySVG = $('#svgToggle');

        contato.classList.toggle("esconde")

        $('toggle').css({ padding: '0px', backgroundColor: 'black' })

        if ($(mySVG).attr('src') == 'assets/icons/ico-close.svg') {
            $(mySVG).attr('src', 'assets/icons/ico-hmbgr.svg');

        } else {
            $(mySVG).attr('src', 'assets/icons/ico-close.svg');
        }
    })

    $('.main-carousel').flickity({
        // options
        cellAlign: 'center',
        freeScroll: true,
        contain: true,
        // disable previous & next buttons and dots
        prevNextButtons: true,
        pageDots: false
      });
});

function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -23.5559394, lng: -46.664353},
      zoom: 18,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });
     // MARKUPS

     // neverland
    var markerNeverland = new google.maps.Marker({
        position: {lat: -23.5563873, lng: -46.6624675},
        title:"Future Job ?"
    }); markerNeverland.setMap(map);
    
    //IMS
    var markerIMS = new google.maps.Marker({
        position: {lat: -23.5564114, lng: -46.6622037},
        title:"IMS ?"
    }); markerIMS.setMap(map);

    //IBIS HOTEL
    var markerIbis = new google.maps.Marker({
        position: {lat: -23.5567, lng: -46.6621145},
        title:"IMS ?"
    }); markerIbis.setMap(map);


  }