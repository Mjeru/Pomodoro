import { pickFromSyntheticEvent } from "./PickFromSyntheticEvent";

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()("value");
