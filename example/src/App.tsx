import React from 'react'

import { LitteraService, makeTranslations, useLitteraMethods } from '@assembless/react-littera'

const App = () => {
  return <LitteraService preset={PRESET} initialLocale="no_NO" locales={LOCALES}>
    <Header />
  </LitteraService>
}

export default App
