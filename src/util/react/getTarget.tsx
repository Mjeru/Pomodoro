import { pickFromSyntheticEvent } from "./PickFromSyntheticEvent";

export const getTarget =
  pickFromSyntheticEvent<HTMLInputElement>()("innerHTML");
