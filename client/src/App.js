import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import './index.css';
import Search from './components/Search/Search';
import EventsView from './components/EventsView/EventsView';
import IconsMenu from './components/IconsMenu/IconsMenu';
import Navbar from './components/navbar/Navbar';
import SignUpForm from './components/user/SignUpForm';
import LogInForm from './components/auth/LoginForm';



// function App() {
//   return (
//     <html>
//       <head>
//         <title>Learn react</title>
//       </head>
//       <body>
//         <div className="landing-page">
//           <Navbar  />
//           <h1>London on a Budget</h1>
//           <Search />
//           <IconsMenu />
//           <EventsView />
//           <SignUpForm />
//           <LogInForm />
          
//         </div>
//       </body>
//     </html>
//   );
// }


function App() {
  return (
    <html>
      <head>
        <title>Learn react</title>
      </head>
       <body>
        <div className="App">
          <Routes>
          <Route path="/" element={ < Search/> } />
          <Route path="/" element={ < EventsView/> } />
          <Route path="/" element={ < IconsMenu/> } />
          <Route path="/" element={ < Navbar/> } />
          <Route path="/login" element={ <LogInForm/> } />
          <Route path="/signup" element={ <SignUpForm/> } />
          </Routes>
        </div>
        </body>
    </html>
  );
}


export default App;

