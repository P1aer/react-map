import {Routes} from "react-router";
import {MapRoutes} from "@modules/map";
import type {FC} from "react";
import React from "react";

export const AppRouter:React<FC> = () => (
    <Routes>
        {MapRoutes}
    </Routes>
)