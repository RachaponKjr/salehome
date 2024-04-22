'use client'
import React, { useCallback, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { Box } from "@chakra-ui/react"

const GoogleMapBox = () => {
    const center = {
        lat: -3.745,
        lng: -38.523
    };
    // ของที่ต้องใช้
    // AIzaSyB1JhTFiz1-StdwG0AiC07JTQfpHZee1c0


    // AIzaSyANhTkFmVEF5G1TV50Qe58VV3LH3hyjGtw


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyB1JhTFiz1-StdwG0AiC07JTQfpHZee1c0"
      })
    
      const [map, setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
    
        setMap(map)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])
    
    return (
        isLoaded ? (
            <GoogleMap
            mapContainerStyle={{
                width: '100%',
                height: '100%'
            }}
            center={center}
            markers={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            >
                <Marker position={center} />
            </GoogleMap>
        ): null
    )
}

export default GoogleMapBox