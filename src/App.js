// import React from 'react'
// import Body from './components/Body';
// import Header from './components/Header';

// function App() {
//   return (
//     <div>
//       <Header></Header>
//       <Body></Body>
//     </div>
      
//   );s
// }

// export default App;
import React from 'react'
import Navigation from './Navigation/Navigation'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Contect from './components/Contect'
import ToDoList from './components/ToDoList'
const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Navigation/>      
        </div>
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/contect' element={<Contect />} />
            <Route path='/todolist' element={<ToDoList />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App