"use client" 

import { useEffect, useRef } from 'react';
import { Loader, LoaderOptions } from '@googlemaps/js-api-loader';

export default function Map() {
  const mapRef = useRef<HTMLDivElement | null>(null); // Reference to the map container div

  useEffect(() => {
    const apiOptions = {
        //apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!, 
        apiKey: 'AIzaSyCXT4eLEG-9VerYgcNIkJZY_ILF9MbyaIE', 
        version: 'weekly',
      };
      

    const loader = new Loader(apiOptions);

    loader
      .importLibrary('maps')
      .then((maps) => {
        if (mapRef.current) {
          const map = new maps.Map(mapRef.current, {
            center: { lat: -34.397, lng: 150.644 }, 
            zoom: 8, 
          });

          console.log('Maps JS API loaded');
        }
      })
      .catch((error) => {
        console.error('Error loading Google Maps API:', error);
      });
  }, []);

  return <div ref={mapRef} style={{ height: '500px', width: '100%' }} />; 
}
