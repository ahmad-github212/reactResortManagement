import React, { Component } from 'react'
import Title from './Title' ;
import { FaGlassCheers, FaHiking, FaShuttleVan } from "react-icons/fa";
import { GiGolfFlag } from "react-icons/gi";
import '../App.css' ;
export default class Services extends Component {
    state = {
            services :[
                {
                    icon:<FaGlassCheers />,
                    title:"free cheers",
                    info: "our services are best in the area. its 4 star hotel. our charges are also upto mark of our services."
                },
                {
                    icon:<FaHiking />,
                    title:"free hiking",
                    info: "our services are best in the area. its 4 star hotel. our charges are also upto mark of our services."
                },
                {
                    icon:<FaShuttleVan />,
                    title:"free shuttle van",
                    info: "our services are best in the area. its 4 star hotel. our charges are also upto mark of our services."
                },
                {
                    icon:<GiGolfFlag />,
                    title:"Golf Ground",
                    info: "our services are best in the area. its 4 star hotel. our charges are also upto mark of our services."
                }
            ]
        }
    render() {
        
        return (
            <section className="services">
               <Title title="Services"></Title> 
               <div className="services-center">
                    {this.state.services.map((item, index)=>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
               </div>
            </section>
        )
    }
}
