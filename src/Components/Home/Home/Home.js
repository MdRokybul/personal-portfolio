import React from 'react';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import Projects from '../Projects/Projects';


const Home = () => {
    return (
        < >
            <Header/>
            <Projects/>
            <Blog/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;