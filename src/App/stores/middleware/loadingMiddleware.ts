import { setLoading } from "@app/stores"
import type {Middleware, PayloadAction} from "@reduxjs/toolkit";


export const loadingMiddleware: Middleware = ({ dispatch }) => 
  (next) => (action: unknown) => {
    if (typeof action === 'object' && action !== null && 'type' in action) {
      const payloadAction = action as PayloadAction<unknown>;
      
      if (payloadAction.type.endsWith('/pending')) {
        dispatch(setLoading(true));
      } 
      else if (
        payloadAction.type.endsWith('/fulfilled') || 
        payloadAction.type.endsWith('/rejected')
      ) {
        dispatch(setLoading(false));
      }
    }
    return next(action);
  };