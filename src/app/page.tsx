"use client";

import Image from "next/image";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faBook,
  faCode,
  faInfo,
  faLocation,
  faMap,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import { Text, Title } from "@mantine/core";
import { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import Information from "./components/info";
import Location from "./components/location";
import Floorplan from "./components/floorplan";
import Booking from "./components/booking";
import localFont from "next/font/local";

export default function Home() {
  const [selection, setSelection] = useState("info");

  return (
    <div className="flex flex-col justify-center w-100vw">
      {/* HEADER */}
      <header className="flex flex-col sticky top-0 min-h-[15vh] w-100vw justify-center z-50 shadow-[0_5px_10px_0px_rgba(0,0,0,0.75)]">
        <div className="flex flex-row w-100vw text-center justify-center mt-5">
          <Image
            src="/images/MacleodClanCrestWhite.png"
            alt="Macleod Crest"
            width={100}
            height={100}
          />
          <div className="flex flex-col justify-center text-center w-100vw my-5">
            <h1
              className={`text-center morrisFontTitle antialiased`}
            >
              Beechland
            </h1>
            <Text>Self Catering Annexe</Text>
          </div>
        </div>

        <div className="flex flex-row justify-around p-5">
          <Link
            className="flex items-center gap-1 hover:underline hover:underline-offset-4"
            href=""
            rel="noopener noreferrer"
            onClick={() => setSelection("info")}
          >
            <FontAwesomeIcon icon={faInfo} size="xs" width={16} />
            Information
          </Link>

          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href=""
            rel="noopener noreferrer"
            onClick={() => setSelection("location")}
          >
            <FontAwesomeIcon icon={faLocation} size="xs" width={16} />
            Location
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href={""}
            onClick={() => setSelection("floorplan")}
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faMap} size="xs" width={16} />
            Floor Plan
          </Link>

          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href=""
            rel="noopener noreferrer"
            onClick={() => setSelection("booking")}
          >
            <FontAwesomeIcon icon={faBook} size="xs" width={16} />
            Booking
          </Link>
        </div>
      </header>

      {/* MAIN */}
      <main className="mb-auto flex flex-col mx-10 my-5 gap-y-4">
        {selection == "info" ? (
          <Information />
        ) : selection == "location" ? (
          <Location />
        ) : selection == "floorplan" ? (
          <Floorplan />
        ) : selection == "booking" ? (
          <Booking />
        ) : (
          <Information />
        )}
      </main>

      {/* FOOTER */}
      <footer className="flex flex-col min-h-[15vh] justify-center justify-items-center w-100vw bg-footer-bg-img">
        <div className="grid-cols-2 gap-4 w-100vw grid-flow-col auto-cols-max">
          <div className="order-1">
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Link 1
            </Link>
          </div>

          <div className="order-2">
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Link 2
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center w-100vw text-center mt-32 mb-5">
          <div className="w-auto bottom-0">
            <Link
              className="hover:underline hover:underline-offset-4"
              href="https://gavin.works"
              target="_blank"
              rel="noopener noreferrer"
            >
              Site by Gavin
            </Link>

            <Text>Copyright © 2025</Text>
          </div>
        </div>
      </footer>
    </div>
  );
}
