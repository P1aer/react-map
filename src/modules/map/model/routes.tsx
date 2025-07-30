import {Route} from "react-router";
import {DefaultLayout} from "@shared/layouts";
import {MapPage} from "@modules/map/ui";
import React from "react";

export const MapRoutes:React.ReactElement = (
    <Route element={<DefaultLayout/>}>
        <Route path='/' element={<MapPage />}/>
    </Route>
)