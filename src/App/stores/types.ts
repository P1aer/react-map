import {MainStore} from "./MainStore.ts";

export type MainState = ReturnType<typeof MainStore>
export type MainDispatch = typeof MainStore.dispatch
export type LoadingSliceState = {
    isLoading: boolean,
}