import { Title, Text } from "@mantine/core";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

export default function Location() {
  return (
    <div className="flex flex-col justify-center text-center my-5">
      <Title order={3}>
        <a id="location">Location</a>
      </Title>
      <Text>
        The accomodation is located in a small village about 5 minutes drive
        from Stornoway.
      </Text>

      <MapContainer
        center={[58.248328, -6.338089]}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: 512 }}
        className="z-40 h-[50vh] my-5"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[58.248374, -6.338151]}
          icon={
            new Icon({
              iconUrl: "/images/mapMarker.png",
              iconSize: [50, 50],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>Beechland Annexe</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
