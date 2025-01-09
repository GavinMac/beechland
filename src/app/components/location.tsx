"use client";

import { Title, Text } from "@mantine/core";
import "leaflet/dist/leaflet.css";
import { useMemo } from "react";
import dynamic from "next/dynamic";

export default function Location() {

  const Map = useMemo(() => dynamic(
    () => import('@/app/components/locationMap'),
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])

  return (
    <div className="flex flex-col justify-center text-center my-5">
      <Title order={3}>
        <a id="location">Location</a>
      </Title>
      <Text>
        The accomodation is located in a small village about 5 minutes drive
        from Stornoway.
      </Text>

      <Map/>
    </div>
  );
}
