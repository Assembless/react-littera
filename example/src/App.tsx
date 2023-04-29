import React, { Suspense } from 'react';
import Header from './Header';

import { LitteraService } from './config'

const App = () => {
  return <LitteraService remote={{url: "https://cdn.simplelocalize.io/d47c37f36f9e4636af88d40dc05294d2/_latest/{locale}"}} initialLocale="no_NO">
    <Suspense fallback={() => <h1>Loading...</h1>}>
      <Header /> 
    </Suspense>
  </LitteraService>
}

export default App
