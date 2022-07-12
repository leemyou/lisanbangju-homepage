// 라우트
import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Words from '../pages/Words';
import Sermon from '../pages/Sermonlist';
import Service from '../pages/Service';
import Offering from '../pages/Offering';
import Way from '../pages/Way';
import Minister from '../pages/Minister';
import Contact from '../pages/Contact';

export default function Routes() {
    <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/words" element={<Words/>} />
            <Route exact path="/sermon" element={<Sermon/>} />
            <Route exact path="/service" element={<Service/>} />
            <Route exact path="/offering" element={<Offering/>} />
            <Route exact path="/way" element={<Way/>} />
            <Route exact path="/minister" element={<Minister/>} />
            <Route exact path="/contact" element={<Contact/>} />
    </Routes>
}
