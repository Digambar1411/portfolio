import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header, Intro, Blogs, Projects, Footer} from './components'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <Intro />
            <Blogs />
            <Projects />
          </>
        } />
        <Route path='/blogs' element={<Blogs />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
