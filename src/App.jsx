import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header, Intro, Blogs, Projects, Footer, BlogDetails} from './components'

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
        <Route path='/blog/:slug' element={<BlogDetails />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
