import React from 'react';
import { render } from 'react-dom';

import List from './components/List/List';

document.addEventListener('DOMContentLoaded', () => {
      var reactNode = document.getElementById('app');
    let c = '';
  render(<List />, reactNode);
});
