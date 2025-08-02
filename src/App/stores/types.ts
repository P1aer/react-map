import {MainStore} from "./MainStore.ts";

export type TMainStore = typeof MainStore;
export type MainState = ReturnType<typeof MainStore.getState>
export type MainDispatch = typeof MainStore.dispatch
export type LoadingSliceState = {
    isLoading: boolean,
}