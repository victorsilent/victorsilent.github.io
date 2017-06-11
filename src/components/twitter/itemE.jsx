import React, {Component} from 'react'

import aecioDataset from '../../dados/aecio/aecio.csv'

export default class ItemE extends Component {
    render() {
        return (
            <div className='container'>
                <div className='columns'>
                    <div className='column col-6'>
                        <h3>Quais as principais sentenças relacionadas à palavra “Aécio”?</h3>
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
                                    <th>Sentença</th>
                                    <th style={{float: 'right'}}>Count</th>
                                </tr>
                            </thead>
                        </table>
                        <table className="table table-striped table-hover">
                            <tbody>
                                {   
                                    aecioDataset.slice(0, 30).map(row => {
                                        return (
                                            <tr>
                                                <td>{row._1}</td>
                                                <td style={{float: 'right'}}>{row._2}</td>
                                            </tr>  
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                     </div>
                </div>
            </div>
        )
    }
}
