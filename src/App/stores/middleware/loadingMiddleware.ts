import { setLoading } from "../loading.slice"
export const loadingMiddleware = (store) => (next) => (action) => {
    const { dispatch } = store;

    if (action.type.endsWith('/pending')) {
        dispatch(setLoading(true));
    }
    else if (action.type.endsWith('/fulfilled') || action.type.endsWith('/rejected')) {
        dispatch(setLoading(false));
    }

    return next(action);
};