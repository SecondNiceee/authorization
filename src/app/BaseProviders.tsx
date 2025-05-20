import type { FC, ReactNode } from "react";
import { BrowserRouter } from "react-router";
import {Provider} from "react-redux";
import { store } from "./store/AppStore";

interface IBaseProviders{
    children : ReactNode;
}
const BaseProviders:FC<IBaseProviders> = ({children}) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                {children}
            </Provider>
        </BrowserRouter>
    );
};

export default BaseProviders;