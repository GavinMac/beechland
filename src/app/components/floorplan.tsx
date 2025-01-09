'use client';

import { Title, Text } from "@mantine/core";
import Image from "next/image";

export default function Floorplan() {

    return(
        <div className="flex flex-col justify-center w-100vw my-10 text-center">
        <Title order={3}>
          <a id="floorplan">Floor Plan</a>
        </Title>
        <Text>
          The appartment has 2 bedrooms, a bathroom and a lounge/kitchen
          area. There is a single bed room and a double bed room, as well as
          a couch bed.
        </Text>

        <div className="w-100vw text-center flex justify-center">
          <Image
            src="/images/floor-plan.png"
            alt="Floor plan"
            width={400}
            height={400}
            className="m-5"
          />
        </div>
      </div>
    );

}