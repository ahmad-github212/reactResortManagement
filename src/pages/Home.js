import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import "../App.css" ;

const Home = ()=> {
    return (
        <>
        <Hero hero = "defaultHero" >
            <Banner title="luxurius rooms" subtitle="deluxe rooms starting at $200">
                <Link to = "/rooms" className="btn-primary">
                    our rooms
                </Link>
                <Link to = '/' className="btn-primary">login</Link>
                <Link to = '/' className="btn-primary">sign-out</Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms />
       
        </>
    )
}
export default Home ;
