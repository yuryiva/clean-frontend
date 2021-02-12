import React from 'react';
import { Link } from "react-router-dom";
import JoinEvent from '../joinEvent/JoinEvent';
import MapBox from './mapbox/MapBox'
import styled from "styled-components";


export default function MapSection() {
    return (
        <MapWrapper>          

            <Link to="/myEvents">
                <EventButton>My events</EventButton>
            </Link> 

            <MapBox/>  

            <Link to="/createEvent">
                <EventButton>Create an event</EventButton>
            </Link>            

            <JoinEvent />
           
        </MapWrapper>
    )
}

const MapWrapper = styled.div`
  max-width: 100vw;  
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 5%;
`

const EventButton = styled.button`
    /* width: 100%; */
    width: 250px;
    margin: 40px 0;
    height: 40px;
    font-size: 1.2rem;
    font-weight: 800;
    border: 1px solid #7dc81f;
    border-radius: 25px;
    background-color: #7dc81f;
    
`

