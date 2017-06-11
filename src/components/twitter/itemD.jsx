import React, {Component} from 'react'

import dilmaDataset from '../../dados/dilma/dilma.csv'

export default class ItemD extends Component {
    render() {
        return (
            <div className='container'>
                <div className='columns'>
                    <div className='column col-6'>
                        <h3>Quais as principais sentenças relacionadas à palavra “Dilma”?</h3>
                        <h5><strong>Como Foi Feito</strong></h5>
                        <article>
                            <p>
                                Alteramos o filtro utilizado no item A, agora o filtro ficou como "Dilma" ou "Aécio", após isso (e o processo do item A, split, e etc) realizamos um reduce para contar quais palavras mais foram expostas relacioando os termos buscados                            </p>
                            <br />
                        </article>
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
                                    dilmaDataset.slice(0, 30).map(row => {
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
