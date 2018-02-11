import React from 'react';
import PCHeader from './pcheader.js';
import PCFooter from './pcfoot.js';
import Newscontainer from './pc_newcontainer.js';


export default class PCIndex extends React.Component{
    render(){
        return(
            <div>
                <PCHeader />
                <Newscontainer />
                <PCFooter />
            </div>
        )
    }
}