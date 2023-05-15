import { pickFromSyntheticEvent } from "./PickFromSyntheticEvent";

export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()("checked");
