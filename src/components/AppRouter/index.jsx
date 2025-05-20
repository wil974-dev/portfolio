import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../../pages/Home';
import Skills from '../../pages/Skills';
import Portfolio from '../../pages/Portfolio';
import Contact from '../../pages/Contact';

function AppRouter() {
    return (
        <>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Layout>
            </Router>
        </>
    );
}

export default AppRouter;
