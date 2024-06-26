import React, { useEffect, useCallback, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import House from "./components/house/Houses";
import Guest from "./components/guest/Guests";
import Reservation from "./components/reservation/Reservations";
import Room from "./components/room/Rooms";
import "./App.css";
import coverImg from "./assets/img/sandwich.jpg";
import { login, logout as destroy } from "./utils/auth";
import Cover from "./components/utils/Cover";
import { Notification } from "./components/utils/Notifications";


const App = function AppWrapper() {
  const isAuthenticated = window.auth.isAuthenticated;

  return (
    <>
    <Notification />
    {isAuthenticated ? (
        <Container fluid="md">
          <main>
           <House />
           <Room />
           <Guest />
           <Reservation />
          </main>
        </Container>
       ) : (
        <Cover name="Lodging Management System" login={login} coverImg={coverImg} />
      )}
    </>
  );
};

export default App;