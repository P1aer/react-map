import {AppRouter} from "./routers";
import '@shared/fonts/montserrat/monsterrat.css';
import './styles/global.css';
import {BrowserRouter} from "react-router";
import {Loader} from "@shared/ui";
import {selectLoading, useLoadSelector} from './stores'
import 'leaflet/dist/leaflet.css';


function App() {
    const isLoading = useLoadSelector(selectLoading)

    return (
          <BrowserRouter>
              {isLoading && <Loader/>}
              <AppRouter/>
          </BrowserRouter>
  )
}

export default App
