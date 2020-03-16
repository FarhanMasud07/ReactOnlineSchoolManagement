import React, { Component } from 'react'
import Title from './title';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import SportsHandballOutlinedIcon from '@material-ui/icons/SportsHandballOutlined';
export default class services extends Component {
    state ={
        services:[
          {
            icon:<LocalLibraryOutlinedIcon className="LocalLibraryIcon"/>,
            title:"library",
            info:"Our library is very nice student can read books in peace"
          },
          {
            icon:<EmojiObjectsOutlinedIcon/>,
            title:"knowledge",
            info:"Knowledge is the most powerful weapon in our soecity for explore"
          },
          {
            icon:<SportsHandballOutlinedIcon/>,
            title:"sports",
            info:"Our sports is very nice student can play with our various playing props"
          }
        ]
      }
    render() {
        return (
            <section className="services">
                <Title title="services" className="div"/>
                <div className="services-center">
                    {this.state.services.map((eachItem,index)=>{
                        return <article key={index} className="service">
                            <div className="eachItem">
                                <span>{eachItem.icon}</span>
                                <h6 className="card-body">{eachItem.title}</h6>
                                <p >{eachItem.info}</p>
                            </div>
                            
                        </article>
                    })}
                </div>
                
            </section>
        )
    }
}
