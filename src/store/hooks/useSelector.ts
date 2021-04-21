import { useSelector as _useSelector, TypedUseSelectorHook } from "react-redux";
import { RootStore } from "../reducers";

const useSelector: TypedUseSelectorHook<RootStore> = _useSelector;

export { useSelector };
