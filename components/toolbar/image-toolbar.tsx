import BgRemove from "./bg-remove";
import BackgroundReplace from "./bg-replace";
import GenRemove from "./gen-remove";
import GenerativeFill from "./generative-fill";

export default function ImageTools() {
  return (
    <>
      <GenRemove />
      <BgRemove />
      <BackgroundReplace />
      <GenerativeFill />
    </>
  );
}
