import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Cards from './Cards'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <h1 className='headingup'> Top NetFlix Series </h1>
    <div className='allcards'>
      <Cards
        img_src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20200813125652/dark-1.jpg"
        title="An Original NetFlix"
        sname="DARK"
        link=""
      />

      <Cards
        img_src="https://static.toiimg.com/photo/97276790.cms?resizemode=4"
        title="An Original NetFlix"
        sname="SOUTH"
        link=""
      />

      <Cards
        img_src="https://www.koimoi.com/wp-content/new-galleries/2023/01/pathaan-quick-review-001.jpg"
        title="An Original NetFlix"
        sname="PATHAN"
        link=""
      />

    </div>

    <div className='allcards'>

    <Cards
        img_src="https://s.studiobinder.com/wp-content/uploads/2020/12/All-Marvel-Movies-in-Order-of-Release-StudioBinder.jpg"
        title="Marvel Studio"
        sname="AVENGERS INFINITY WAR"
        link=""
      />

      <Cards
        img_src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVF5T8wW9QkOJnf2g9jrcCKZsOcYIMFFql6cBSSU7xQ&usqp=CAU&ec=48665699"
        title="Marvel Original Studio"
        sname="GUARDIANS OF THE GALAXY"
        link=""
      />

      <Cards
        img_src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQJoJ114ADEzNvr44ijPzEAuNTrrO9dpgTwc0IcOWCA&usqp=CAU&ec=48665699"
        title="Amazon Prime Video"
        sname="ANEMY"
        link=""
      />

    </div>

    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
