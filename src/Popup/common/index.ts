import { shallowEqual, useSelector } from "react-redux";

export function useSelectorEq<STATE, T>(fn: (state: STATE) => T): T {
  return useSelector(fn, shallowEqual);
}
