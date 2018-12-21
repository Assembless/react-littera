import React from 'react';
import { render } from 'react-dom';
import { LitteraProvider } from '../../src';

import SimpleText from './simpleText';

const App = () => (
  <LitteraProvider language="de_DE">
    <SimpleText super="test" />
  </LitteraProvider>
);

render(<App />, document.getElementById('root'));
