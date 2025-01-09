"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import { Title, Text } from "@mantine/core";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Information() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  return (
    <div className="flex flex-col justify-center w-100vw my-10 text-center">
      <Title order={3} className="my-5">
        <a id="info">Information</a>
      </Title>
      <Text className="my-5">
        Beechland Annexe is a small self catering apartment attached to a family
        home in the Isle of Lewis. Stay in a small village called Tunga (Tong),
        a short drive away from the town of Stornoway, the main town on the
        island.
      </Text>

      <Text className="my-5">
        There is a beach a short walk from the accomodation within the village
        and more beaches further north more accessible via car or bus.
      </Text>

      <Carousel
        slideSize="100%"
        height="100%"
        slideGap="xs"
        controlsOffset="md"
        controlSize={14}
        withControls
        loop
        withIndicators
        align="start"
        plugins={[autoplay.current]}
        nextControlIcon={
          <FontAwesomeIcon
            icon={faArrowCircleRight}
            width={20}
            className="text-white opacity-75"
          />
        }
        previousControlIcon={
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            width={20}
            className="text-white opacity-75"
          />
        }
        className="bg-gray-300 my-5"
      >
        <CarouselSlide>
          <Image
            src="/images/rooms/outside-pano.jpg"
            alt="Outside Stairs"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </CarouselSlide>

        <CarouselSlide>
          <Image
            src="/images/rooms/stair-entrance.jpg"
            alt="Outside Stairs"
            width={0}
            height={0}
            layout="fill"
            objectFit="contain"
            sizes="100%"
            className="w-full h-auto"
          />
        </CarouselSlide>

        <CarouselSlide>
          <Image
            src="/images/rooms/livingroom-entrance.jpg"
            alt="Outside Stairs"
            width={0}
            height={0}
            layout="fill"
            objectFit="contain"
            sizes="100%"
            className="w-full h-auto"
          />
        </CarouselSlide>

        <CarouselSlide>
          <Image
            src="/images/rooms/livingroom.jpg"
            alt="Outside Stairs"
            width={0}
            height={0}
            layout="fill"
            objectFit="contain"
            sizes="100%"
            className="w-full h-auto"
          />
        </CarouselSlide>

        <CarouselSlide>
          <Image
            src="/images/rooms/kitchen-entrance.jpg"
            alt="Outside Stairs"
            width={0}
            height={0}
            layout="fill"
            objectFit="contain"
            sizes="100%"
            className="w-full h-auto"
          />
        </CarouselSlide>
      </Carousel>
    </div>
  );
}
