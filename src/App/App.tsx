import './styles/global.css';

import {AppRouter} from "@app/routers";
import {MainProviders} from "@app/providers/MainProviders.tsx";

function App() {
  return (
      <MainProviders>
        <AppRouter/>
      </MainProviders>
  )
}

export default App
