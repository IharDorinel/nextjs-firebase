import {RootReducer} from "../redux/reducers";
import {TypedUseSelectorHook, useSelector} from "react-redux";


export const useTypedSelector: TypedUseSelectorHook<RootReducer> = useSelector