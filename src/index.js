import React from 'react'
import { render } from 'react-dom'

import List from './components/List/List'

document.addEventListener('DOMContentLoaded', () => {
  const reactNode = document.getElementById('app')
  const c = ''
  render(<List />, reactNode)
})
