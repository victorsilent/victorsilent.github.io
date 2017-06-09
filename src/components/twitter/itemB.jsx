import React, {Component} from 'react'

import hashtagsDay15File from '../../dados/itemB/15.csv' 
import hashtagsDay16File from '../../dados/itemB/16.csv' 
import hashtagsDay17File from '../../dados/itemB/17.csv' 
import hashtagsDay18File from '../../dados/itemB/18.csv' 
import hashtagsDay19File from '../../dados/itemB/19.csv' 
import hashtagsDay20File from '../../dados/itemB/20.csv' 

export default class ItemB extends Component {

    constructor(props) {
        super(props);
        this.state = {
            files: [
                hashtagsDay15File, 
                hashtagsDay16File,
                hashtagsDay17File,
                hashtagsDay18File,
                hashtagsDay19File,
                hashtagsDay20File
            ],
            itemDayClicked: -1,
            showRows: false
        }
    }

    onClickDayItem(daySelected) {
        this.setState({
            showRows: true,
            itemDayClicked: daySelected
        })
    }
    
    render() {
        return (
            <div className='container'>
                <div className='columns'>
                    <div className='column col-6'>
                        <h3>Análise de tweets por Dia</h3>
                        <h5><strong>Como Foi Feito</strong></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium iste, odit iure. Quo quod aperiam vel, velit eos sapiente odit quos quaerat saepe, labore reprehenderit eius sequi qui! At, nisi.</p>
                        <br />
                        <h5><strong>Informações Extras</strong></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium iste, odit iure. Quo quod aperiam vel, velit eos sapiente odit quos quaerat saepe, labore reprehenderit eius sequi qui! At, nisi.</p>
                    </div>
                    <div className='column col-6'>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Dia</th>
                                    <th>
                                        <a style={{padding:'20px'}}
                                           onClick={this.onClickDayItem.bind(this, 0)}>
                                           15
                                        </a>
                                    </th>
                                    <th>
                                        <a style={{padding:'20px'}}
                                           onClick={this.onClickDayItem.bind(this, 1)}>
                                           16
                                        </a>
                                    </th>
                                    <th>
                                        <a style={{padding:'20px'}}
                                           onClick={this.onClickDayItem.bind(this, 2)}>
                                           17
                                        </a>
                                    </th>
                                    <th>
                                        <a style={{padding:'20px'}}
                                           onClick={this.onClickDayItem.bind(this, 3)}>
                                           18
                                        </a>
                                    </th>

                                    <th>
                                        <a style={{padding:'20px'}}
                                           onClick={this.onClickDayItem.bind(this, 4)}>
                                           19
                                        </a>
                                    </th>
                                    <th>
                                        <a style={{padding:'20px'}}
                                           onClick={this.onClickDayItem.bind(this, 5)}>
                                           20
                                        </a>
                                    </th>
                                    <th>Count</th>
                                </tr>
                            </thead>
                        </table>
                        <table className="table table-striped table-hover">
                            <tbody>
                                {   
                                    this.state.showRows ? 
                                        this.state.files[this.state.itemDayClicked].slice(0, 30).map(row => {
                                            return (
                                                <tr>
                                                    <td>{row._1}</td>
                                                    <td style={{float: 'right'}}>{row._2}</td>
                                                </tr>
                                            )
                                        })
                                    : null 
                                }
                            </tbody>
                        </table>
                     </div>
                </div>
            </div>
        )
    }
}
