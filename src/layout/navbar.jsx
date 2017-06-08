import React, {Component} from 'react'
import './navbar.css'
export default class Navbar extends Component{
    render(){
        return (
            <div className='section section-header bg-gray'>
                <div className="grid-header container grid-1280">
                    <header className="navbar">
                        <section className="navbar-section">
                            <a href='#/' className="btn btn-link">Home</a>
                        </section>
                        <section className="navbar-section">
                            <a href='#/a' className="btn btn-link">Item A</a>
                            <a href='#/b' className="btn btn-link">Item B</a>
                            <a href='#/c' className="btn btn-link">Item C</a>
                            <a href='#/d' className="btn btn-link">Item D</a>
                            <a href='#/e' className="btn btn-link">Item E</a>
                        </section>
                    </header>
                </div>
            </div>
            
        )
    }
}