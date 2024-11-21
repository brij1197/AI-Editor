"use server";

import { checkImageProcessing } from "@/lib/check-processing";
import { actionClient } from "@/lib/safe-action";
import { v2 as cloudinary } from "cloudinary";
import { z } from "zod";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const genCropSchema = z.object({
  activeVideo: z.string(),
  aspect: z.string(),
  height: z.string(),
});

export const genCrop = actionClient
  .schema(genCropSchema)
  .action(async ({ parsedInput: { activeVideo, aspect, height } }) => {
    const parts = activeVideo.split("/upload/");
    const cropUrl = `${parts[0]}/upload/ar_${aspect},c_fill,g_auto,h_${height}/${parts[1]}`;

    let isProcessed = false;
    const maxAttempts = 20;

    const delay = 1000;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      isProcessed = await checkImageProcessing(cropUrl);
      if (isProcessed) {
        break;
      }
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    if (!isProcessed) {
      return { error: "Video Processing Failed" };
    }
    console.log(cropUrl);
    return { success: cropUrl };
  });
