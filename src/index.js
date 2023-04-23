import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Cards from './Cards';
import Sdata, {S2data} from './Sdata';


function ncard(val) {
  return (
    <Cards
      key={val.id}
      img_src={val.img_src}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <h1 className='headingup'> Top NetFlix Series </h1>
      <div className='allcards'>
        {Sdata.map(ncard)}
      </div>

      <div className='allcards'>
      {S2data.map(ncard)}
      </div>
    </>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
