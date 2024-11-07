import BgRemove from "./bg-remove";
import BackgroundReplace from "./bg-replace";
import GenRemove from "./gen-remove";

export default function ImageTools() {
  return (
    <>
      <GenRemove />
      <BgRemove />
      <BackgroundReplace />
    </>
  );
}
