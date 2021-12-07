import { START_LOADER, STOP_LOADER } from "../actionTypes";

export const startLoader = () => ({
  type: START_LOADER,
});

export const stopLoader = () => ({
  type: STOP_LOADER,
});
