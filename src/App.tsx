import React from 'react';
import { AppRouter } from "./routes"
import { AppWrapper } from './styles/styles.app';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fas, fab)

function App() {
  return (
    <AppWrapper>
      <AppRouter />
    </AppWrapper>
  );
}

export default App;