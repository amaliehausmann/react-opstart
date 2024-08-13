import './App.scss'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

function App() {
  return (
    <>
      <Header headerText='Props er cool' />
      <Main />
      <Footer />
    </>
  )
}
export default App
