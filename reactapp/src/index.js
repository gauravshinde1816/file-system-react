import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FileItem from './Components/FileItem';
import FileList from './Components/FileList';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index path='/files' element={<FileList />}/>
        <Route path='/files/:id' element={<FileItem />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
