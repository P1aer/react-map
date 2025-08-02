import { Route } from "react-router";
import { DefaultLayout } from "@shared/layouts";
import {MapPage} from "@modules/map";

export const MapRoutes = (
            <Route element={<DefaultLayout/>}>
            <Route path='/' element={<MapPage />}/>
        </Route>
)