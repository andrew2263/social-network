import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          {/* <Route path="/dialogs" component={ Dialogs } />
          <Route path="/profile" component={ Content } /> */}

          <Route path="/dialogs" render={ () => <Dialogs dialogsPage={ props.state.dialogsPage } updateNewMessageText={ props.updateNewMessageText } addMessage={ props.addMessage } /> } />
          <Route path="/profile" render={ () => <Content profilePage={ props.state.profilePage } addPost={ props.addPost } updateNewPostText={ props.updateNewPostText } /> } />

          <Route path="/news" component={ News } />
          <Route path="/settings" component={ Settings } />
          <Route path="/music" component={ Music } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
