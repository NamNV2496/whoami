import React, { Component } from 'react';
import data from "./data"; 


const menuJavaItems = data.MenuJavaItems;

class Example1 extends Component {
    
	render() {
        menuJavaItems.map(s => console.log(s));
		return (
            <ul>
                {
                    // menuJavaItems.map(s => console.log(s))
                }
            </ul>
        );
    }

    
} 
export default Example1;
