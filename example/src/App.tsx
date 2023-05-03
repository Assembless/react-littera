import React from 'react';
import Header from './Header';

import { LitteraService } from './config'

const App = () => {
  return <LitteraService initialLocale="no_NO">
    <Header />
  </LitteraService>
}

export default App
