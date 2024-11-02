"use client";

import { ModeToggle } from "@/components/theme/mode-toggle";
import Layers from "./layers/layers";
import ActiveImage from "./upload/active-image";
import UploadForm from "./upload/upload-form";

export default function Editor() {
  return (
    <div className="flex h-full">
      <div className="py-6 px-4 basis-[240px] shrink-0">
        <div className="pb-12 text-center">
          <ModeToggle />
        </div>
      </div>
      <UploadForm />
      <ActiveImage />
      <Layers />
    </div>
  );
}
