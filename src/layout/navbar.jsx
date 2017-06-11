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
                            <a href='#/1a' className="btn btn-link">Q1 - A</a>
                            <a href='#/1b' className="btn btn-link">Q1 - B</a>
                            <a href='#/1c' className="btn btn-link">Q1 - C</a>
                            <a href='#/1d' className="btn btn-link">Q1 - D</a>
                            <a href='#/1e' className="btn btn-link">Q1 - E</a> |
                            <a href='#/2a' className="btn btn-link">Q2 - A</a>
                            <a href='#/2b' className="btn btn-link">Q2 - B</a>
                            <a href='#/2c' className="btn btn-link">Q2 - C</a>
                            <a href='#/2d' className="btn btn-link">Q2 - D</a>
                            <a href='#/2e' className="btn btn-link">Q2 - E</a>
                        </section>
                    </header>
                </div>
            </div>
        )
    }
}