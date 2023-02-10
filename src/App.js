//import logo from './logo.svg';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { Gig } from './components/Gig';
import { SignUpBY } from './components/SignUpBY';
import { Selectuser } from './components/Selectuser';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Creategig } from './components/Creategig';
import{Nav} from './components/Nav';
//import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [loginItem, setLoginItem] = useState(<div></div>)

  const [SignUpItem, setSignUpItem] = useState(<div></div>)

  function Loginfunc() {

    setLoginItem(
      <div>
        <Login />
      </div>
    )
  }

  function Signupfunc() {

    setSignUpItem(
      <div>
        <SignUp />
      </div>
    )

  }
  return (
    <Router>
      <header>
        <Nav/>
      </header>

      <div className="App">
        <Routes>
  
          <Route path="/" exact element={


            <div>
              <Link to='/Selectures'>
              <button className='auth'>Create AC</button>
            </Link>

              <Link to='/login'>
                <button className='auth'>Login</button>
              </Link>

            </div>

          }

          />

          <Route path="/Selectures" exact element={<Selectuser />} />

          <Route path="/login" exact element={<Login />} />

          <Route path="/gig" exact element={<Gig />} />

          <Route path="/signup" exact element={<SignUp />} />

          <Route path="/creategig" exact element={<Creategig />} />

          <Route path="/signUpBY" exact element={<SignUpBY />} />

        </Routes>

      </div>

      
    </Router>
  );
}

export default App;