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


    $("#telephone").mask("(00) 0000-0000");

    toastr.options = {
      "closeButton": false,
      "debug": false,
      "newestOnTop": false,
      "progressBar": false,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "400",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }

    $('#contactForm').on('submit', ()=>{
        event.preventDefault();

        var pass = true;

        const regexEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        const regexName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
        const regexTelephone = /(\(\d{2}\)\s)?(\d{4,5}\-\d{4})/;

        if(!regexName.test($("#name").val())){
          toastr["error"]("Nome Inválido. Tente Novamente");
          pass = false;
          $("#email").focus();
        }


        if(!regexEmail.test($('#email').val())){
          toastr["error"]("E-mail Inválido. Tente Novamente");
          pass = false;
          $("#email").focus();
        }

        if(!regexTelephone.test($('#telephone').val())){
          toastr["error"]("Telefone/Celular Inválido. Tente Novamente");
          pass = false;
          $("#email").focus();
        }

        

        if($("#name").val() || $('#email').val() || $('#telephone').val() 
        || $('#message').val() === ""){
          toastr["error"]("Todos os Campos São Obrigatórios");
          pass = false;
        }

        if(pass){
          toastr["Success"]("Tudo Certo ;)");
        }

        
    });

});

function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -23.5563873, lng: -46.6624675},
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
     // MARKUP NEVERLAND

     var contentStringNeverland = 
     '<div style="border: none;" id="content">'+
          '<p>FUTURE JOB</p>'
     '</div>';

      var infowindow1 = new google.maps.InfoWindow({
        content: contentStringNeverland,
        maxWidth: 200
      });
      var markerNeverland = new google.maps.Marker({
        position: {lat: -23.5563873, lng: -46.6624675},
        title:"Future Job ?",
        map: map,
      }); markerNeverland.setMap(map);

      markerNeverland.addListener('click', () => {
        infowindow1.open(map, markerNeverland);
      });
      
    
      // MARKUP IMS
      var contentStringIMS = 
     '<div style="border: none;" id="content">'+
          '<p>IMS SP</p>'
     '</div>';

      var infowindow2 = new google.maps.InfoWindow({
        content: contentStringIMS,
        maxWidth: 200
      });
      var markerIMS = new google.maps.Marker({
        position: {lat: -23.557838, lng: -46.659699},
        map: map,
      }); markerIMS.setMap(map);

      markerIMS.addListener('click', () => {
        infowindow2.open(map, markerIMS);
      });

     // MARKUP IBIS
     var contentStringIBIS = 
     '<div style="border: none;" id="content">'+
          '<p>IBIS HOTEL</p>'
     '</div>';

      var infowindow3 = new google.maps.InfoWindow({
        content: contentStringIBIS,
        maxWidth: 200
      });
    
      var markerIbis = new google.maps.Marker({
          position: {lat: -23.556874, lng: -46.661877},
          map: map,
      }); markerIbis.setMap(map);

      markerIbis.addListener('click', () => {
        infowindow3.open(map, markerIbis);
      });




  }

