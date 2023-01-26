import React from 'react';
import Slider from '../../components/home/Slider';
import Card from '../../components/home/Card';
import Catg from '../../components/home/Catg';
import Descri from '../../components/home/Descri';
import Marque from '../../components/home/Marque';
import Contact from '../../components/home/Contact';

function Home() {
    return (
        <div className="home">
            <Slider />
            <Card />
            <Catg />
            <Descri />
            <Marque />
            <Contact />
        </div>
    );
}

export default Home;
