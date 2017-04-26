'use strict';

let container = document.getElementById('root');


let getLocation = function() {

    let options = {
        enableHighAccuracy: true
    };

    return new Promise(function(resolve, reject) {

        navigator.geolocation.getCurrentPosition(function(position) {

            resolve(position);

        }, function(error) {

            reject(error);

        }, options);
    });

};

getLocation().then(geolocationSuccess, geolocationFail);


function geolocationSuccess(position) {

    let mapImage = document.createElement('img');
    mapImage.src = 'https://maps.googleapis.com/maps/api/staticmap?center=' + position.coords.latitude + ',' + position.coords.longitude + '&zoom=12&size=400x400&maptype=roadmap&key=AIzaSyCMNAdS0a6r3lBfy1_t-64R0LP0cPRwYPs';
    container.appendChild(mapImage);

}

function geolocationFail(error) {
    container.innerHTML = `An error occured. <br />
 Error code: ${error.code} <br />
 Error message: ${error.message}`;
}