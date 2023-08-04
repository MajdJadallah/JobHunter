import React, { useEffect } from 'react'


const Map = () => {
    useEffect(() => {
        // Create a map instance
        const map = new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: 40.712776, lng: -74.005974 }, // Set the initial map center coordinates
          zoom: 12, // Set the initial zoom level
        });
        return () => {
            map && map.setMap(null);
            console.log(window.google); 
          };
        }, []); // Empty dependency array to ensure the effect runs only once
        return <div id="map" style={{ height: '400px' }}></div>;
      };

export default Map
