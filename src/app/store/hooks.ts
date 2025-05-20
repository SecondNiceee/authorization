import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./AppStore";

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDispatch = () => useDispatch<AppDispatch>();