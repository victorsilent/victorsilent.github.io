import React, {Component} from 'react'

import hashtagsDay15File from '../../dados/itemC/15.csv' 
import hashtagsDay16File from '../../dados/itemC/16.csv' 
import hashtagsDay17File from '../../dados/itemC/17.csv' 
import hashtagsDay18File from '../../dados/itemC/18.csv' 
import hashtagsDay19File from '../../dados/itemC/19.csv' 
import hashtagsDay20File from '../../dados/itemC/20.csv' 

export default class ItemC extends Component {

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
                        <h3>Análise de tweets por Hora</h3>
                        <h5><strong>Como Foi Feito</strong></h5>
                        <article>
                            <p>
                                Similar ao item A e B, aqui nós fizemos a alteração de agrupa os tweets por hora do dia e dar um count.
                            </p>
                            <br />
                        </article>
                    </div>
                    <div className='column col-6'>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Hora</th>
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
                                                    <td>{row.time}</td>
                                                    <td style={{float: 'right'}}>{row.count}</td>
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
