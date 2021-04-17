import React from 'react';
import {AppRouter} from "./routes"
import { AppWrapper } from './styles/styles.app';

function App() {
  return (
    <AppWrapper>
      <AppRouter/>
    </AppWrapper>
  );
}

export default App;