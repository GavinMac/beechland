import { Title, Text } from "@mantine/core";
import Image from "next/image";

export default function Booking() {
  return (
    <div className="flex flex-col justify-center w-100vw my-10 text-center">
      <Title order={3}>
        <a id="booking">Booking</a>
      </Title>
      <Text>
        To create a booking, please contact us at:{" "}
        <a
          href="mailto:beechlandannexe@outlook.com"
          className="underline hover:opacity-75"
        >
          beechlandannexe@outlook.com
        </a>
      </Text>
    </div>
  );
}
