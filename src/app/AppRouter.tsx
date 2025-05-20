import {Route, Routes} from "react-router-dom"
import Registration from "../pages/Registration/ui/Registration";
import AppLayout from "./AppLayout";
import { lazy, Suspense } from "react";

const Login = lazy( () => import('../pages/Login/ui/Login') );

const AppRouter = () => {
    return (
        <Routes>
            <Route element = {<AppLayout />} >
                <Route index  path="/registration" element = {<Registration />}  />
                 <Route path="/login" element = {
                    <Suspense fallback = {<p>Loading..</p>}>
                        <Login />
                    </Suspense>
                 }  />
            </Route>
        </Routes>
    );
};

export default AppRouter;