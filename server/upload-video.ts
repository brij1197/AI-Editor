"use server";

import { actionClient } from "@/lib/safe-action";
import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
import z from "zod";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const formData = z.object({
  video: z.instanceof(FormData),
});

type UploadResult =
  | { success: UploadApiResponse; error?: never }
  | { error: string; success?: never };

export const uploadVideo = actionClient
  .schema(formData)
  .action(async ({ parsedInput: { video } }): Promise<UploadResult> => {
    const formVideo = video.get("video");

    if (!formVideo) return { error: "No video was provided" };
    if (!video) return { error: "No video was provided" };

    const file = formVideo as File;

    try {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      return new Promise<UploadResult>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            upload_preset: process.env.CLOUDINARY_PRESET,
            use_filename: true,
            unique_filename: false,
            filename_override: file.name,
            resource_type: "video",
          },
          (error, result) => {
            if (error || !result) {
              console.error("Upload failed:", error);
              reject({ error: "Upload Failed" });
            } else {
              console.error("Upload Successful:", result);
              resolve({ success: result });
            }
          }
        );
        uploadStream.end(buffer);
      });
    } catch (error) {
      console.error(error);
      return { error: "Error processing file" };
    }
  });
