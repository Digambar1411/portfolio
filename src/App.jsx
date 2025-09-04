import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header, Intro, Blogs, Projects, Footer} from './components'
import { ThemeProvider } from './context/theme-context'

function App() {

  return (

    <div className='max-w-[780px] my-0 mx-auto'>
      <ThemeProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={
              <>
                <Intro />
                <Projects />
                <Blogs />
              </>
            } />
            <Route path='/blogs' element={<Blogs />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>

  )
}

export default App
