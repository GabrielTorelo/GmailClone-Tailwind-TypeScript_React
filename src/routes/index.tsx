import { BrowserRouter, Routes as NavRoutes, Route } from "react-router-dom";
import { Signin } from "../pages";

const Routes = () => {
    return (
        <BrowserRouter>
            <NavRoutes>
                <Route index path="/" element={<Signin />} />
            </NavRoutes>
        </BrowserRouter>
    );
};

export default Routes;
