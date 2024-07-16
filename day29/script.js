document.addEventListener("DOMContentLoaded", () => {
    const defaultCoords = [22.2568307, 73.2161385]; 
    const map = L.map('map').setView(defaultCoords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const marker = L.marker(defaultCoords).addTo(map);

    document.getElementById("get-location").addEventListener("click", () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                map.setView([lat, lng], 13);
                marker.setLatLng([lat, lng]);
                marker.bindPopup("You are here!").openPopup();
            }, (error) => {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        alert("User denied the request for Geolocation. Using default location.");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        alert("Location information is unavailable. Using default location.");
                        break;
                    case error.TIMEOUT:
                        alert("The request to get user location timed out. Using default location.");
                        break;
                    case error.UNKNOWN_ERROR:
                        alert("An unknown error occurred. Using default location.");
                        break;
                }
                map.setView(defaultCoords, 13);
                marker.setLatLng(defaultCoords);
                marker.bindPopup("Default location: Tarsali, Vadodara").openPopup();
            }, {
                enableHighAccuracy: true,
                timeout: 10000, 
                maximumAge: 0
            });
        } else {
            alert("Your browser doesn't support geolocation. Using default location.");
            map.setView(defaultCoords, 13);
            marker.setLatLng(defaultCoords);
            marker.bindPopup("Default location: Tarsali, Vadodara").openPopup();
        }
    });
});
