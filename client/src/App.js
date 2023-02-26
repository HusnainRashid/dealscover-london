import React from 'react';
import './App.css';
import './index.css';
import Search from './components/Search/Search';
import EventsView from './components/EventsView/EventsView';
import IconsMenu from './components/IconsMenu/IconsMenu';
import Navbar from './components/navbar/Navbar';
// import LoginForm from '../auth/LoginForm';
import SignUpForm from './components/user/SignUpForm';

function App() {
  return (
    <html>
      <head>
        <title>Learn react</title>
      </head>
      <body>
        <div class="landing-page">
          <h1>London on a Budget</h1>
          <Search />
          <IconsMenu />
          <EventsView />
          <SignUpForm />
          
        </div>
      </body>
    </html>
  );
}


export default App;
