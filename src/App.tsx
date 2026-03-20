import {Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import PageWrapper from './components/layout/PageWrapper'
//import NavBar from './components/layout/NavBar'

// Things to Research
//  React Router's '<Link>' vs HTML '<a>' - What problem does '<Link>' solve?
//  CSS file-per-component pattern - How to import a CSS file into a TSX component
//  The 're' attribute for external links opening in a new tab
//  How to structure a 'mailto: ' link in HTML

// Desired End State
//  Navbar is visible on all three placeholder routes and contains working navigation links
//  Footer is visible on all three placeholder routes
//  HomePage displays your name, a professional summary, and at least two contact links
//  Each component has its own CSS file
//  Navigating between pages does not cause a full browser reload (this confirms '<Link>' is working correctly)
//  The project is committed and pushed to GitHub with a meaningful commit message


// Overall App Structure (Phase 2)
// App
//  Navbar
//  PageWrapper
//    Routes
//      Route / -> HomePage
//      Route /projects -> ProjectsPage
//      route /projects/:id -> ProjectDetailPage
//  Footer
function App() {
  return (
    <Routes>
      <Route element={<PageWrapper/>}>
        <Route path='/' element={ <HomePage />} />
        <Route path='/projects' element={ <ProjectsPage />} />
        <Route path='/projects/:id' element={ <ProjectDetailPage />} />
      </Route>
      // Throws an error because the other functions are not yet complete
      
    </Routes>
  )
}

export default App
