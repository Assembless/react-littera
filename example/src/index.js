import React from 'react';
import { render } from 'react-dom';
import { LitteraProvider } from '../../src';

import SimpleText from './simpleText';
import { setLanguage } from '../../src/LitteraProvider';

const App = () => (
  <LitteraProvider language="de_DE">
    <SimpleText super="test" />
    <button onClick={() => setLanguage("pl_PL")}>Change language</button>
  </LitteraProvider>
);

render(<App />, document.getElementById('root'));
