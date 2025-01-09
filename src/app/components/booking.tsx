'use client';

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Title, Text } from "@mantine/core";

export default function Booking() {
  return (
    <div className="flex flex-col justify-center w-100vw my-10 gap-2 text-center">
      <Title order={3}>
        <a id="booking">Booking</a>
      </Title>
      <Text className="my-5">We charge £350 per week.</Text>
      <Text className="my-5">To create a booking, please contact us at:</Text>
      <Text className="my-5">
        <FontAwesomeIcon icon={faEnvelope} className="mx-2"/>
        <a
          href="mailto:beechlandannexe@gmail.com"
          className="underline hover:opacity-75"
        >
          beechlandannexe@gmail.com
        </a>
      </Text>
      <Text>OR</Text>
      <Text><FontAwesomeIcon icon={faPhone} className="mx-2"/> 01851 701533</Text>
    </div>
  );
}
