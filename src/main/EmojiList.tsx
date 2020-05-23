import React from "react";
import { emojiForSlug } from "../distortions";
import { take } from "lodash";
import { Paragraph } from "../ui";

export default ({ thought }: any) => (
  <Paragraph>
    {take(
      thought.cognitiveDistortions
        .filter((n: any) => n) // Filters out any nulls or undefineds which can crop up
        .filter((distortion: any) => distortion.selected)
        .map((dist: any) => emojiForSlug(dist.slug)),
      8 // only take a max of 8
    )
      .filter(n => n)
      .join(" ")
      .trim()}
  </Paragraph>
);
