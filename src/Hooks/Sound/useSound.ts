import { SoundContext } from "@/Providers/SoundProvider";
import { useContext } from "react";

export const useSound = () => {
  return useContext(SoundContext);
};
