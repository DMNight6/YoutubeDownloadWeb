import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Bar from './component/Navbar/Bar';
import MainPage from './page/MainPage';
import SearchDataPage from './page/SearchDataPage';
import SearchPage from './page/SearchPage';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Bar />
            <Routes>
                <Route index element={<MainPage />} />
                <Route exact path='search'>
                    <Route index element={<SearchDataPage />} />
                    <Route exact path=':data' element={<SearchPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
    , document.getElementById('root')
)