import { Provider } from 'react-redux'
import store from './store'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { Container } from 'reactstrap'
import Header from './components/Header'
import Lists from './components/Lists'

import './App.scss'

const App = () => {
  return (
    <Provider store={store}>
      <Container className="app-container">
        <Header />
        <Lists />
      </Container>
      <ToastContainer />
    </Provider>
  )
}

export default App
