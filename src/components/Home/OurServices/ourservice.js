import React from 'react';
import Hero from '../../Hero';
import Banner from '../Banner/banner';
import {Link} from 'react-router-dom';
const ourservice = () =>{
    return (
        <Hero hero="roomsHero">
            <Banner title="Our Best Services" subtitle="We have highly educated teacher's">
                <Link to="/" className="btn-primary">Return Home</Link>
            </Banner>
        </Hero>
    );
}
export default ourservice