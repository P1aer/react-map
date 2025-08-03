import type {ReactNode} from "react";
import { Provider } from 'react-redux';

import { MainStore } from '@app/stores';
type Props = {
    children: ReactNode;
}
export const MainProviders = ({ children }: Props) => {
    return (
        <Provider store={MainStore}>
            {children}
        </Provider>
    )
}