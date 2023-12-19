"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import VideoCarousel from "./components/VideoCarousel/VideoCarousel";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(VideoCarousel, {
  name: "VideoCarousel",
  inputs: [
    {
      name: "carousels",
      type: "list",
      required: false,
      subFields: [
        {
          name: "titleText",
          type: "string",
          defaultValue: "Default Title",
        },
        {
          name: "subtitleText",
          type: "string",
          defaultValue: "Default Sub Title",
        },
        {
          name: "position",
          type: "string",
          defaultValue: "Top",
        },
        {
          name: "titleColor",
          type: "string",
          defaultValue: "white",
        },
        {
          name: "backgroundAsset",
          type: "string",
          defaultValue:
            "https://podiumaudio.com/wp-content/uploads/2022/09/Book-Cover-default-768x768.jpeg",
        }
      ],
    },
  ],
});
