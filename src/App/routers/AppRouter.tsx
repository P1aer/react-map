import {Routes} from "react-router";
import type {FC} from "react";
import { MapRoutes } from "@modules/map/model";

export const AppRouter:FC = () => (
    <Routes>
        {MapRoutes}
    </Routes>
)