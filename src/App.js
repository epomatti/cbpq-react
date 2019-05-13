import React from 'react'
import LicenseForm from './views/LicenseForm'
import LicenseView from './views/LicenseView'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path='/' exact component={LicenseForm} />
      <Route path='/license' exact component={LicenseForm} />
      <Route path='/license/cbpq/:cbpq' exact component={LicenseView} />
      <Route path='/license/cpf/:cpf' exact component={LicenseView} />
    </Router>
  );
}

export default App