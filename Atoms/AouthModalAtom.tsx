import { atom } from "recoil";

export interface AouthModalState {
  open: boolean;
  view: "login" | "resetPassword" | "signup";
}
const defaultModalState: AouthModalState = {
  open: false,
  view: "login",
};
export const aouthModalState = atom<AouthModalState>({
  key: "AouthModalState",
  default: defaultModalState,
});
