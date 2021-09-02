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
      <Header />
      <Container
        fluid={true}
        className="app-container px-5 py-5"
        style={{ backgroundImage: `url(/background/bg-${Math.floor(Math.random() * 2 + 1)}.jpeg)` }}
      >
        <Lists />
      </Container>
      <ToastContainer />
    </Provider>
  )
}

export default App
