import {AppRouter} from "@app/routers";
import '@shared/fonts/montserrat/monsterrat.css';
import './styles/global.css';
import {BrowserRouter} from "react-router";
import {Loader} from "@shared/ui";
import {useMainSelector} from '@/app/stores'


function App() {
    const { isLoading } = useMainSelector((state) => state.loading)

    return (
          <BrowserRouter>
              {isLoading && <Loader/>}
              <AppRouter/>
          </BrowserRouter>
  )
}

export default App
