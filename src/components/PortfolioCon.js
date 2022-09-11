import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioCon() {
    const [currentPage, setCurrentPage] = useState('About Me');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About Me') {
            return <About />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    }
    const handlePageChange = (page) => setCurrentPage(page);
    return(
        <div>
            <NavTabs className='Nav' currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}