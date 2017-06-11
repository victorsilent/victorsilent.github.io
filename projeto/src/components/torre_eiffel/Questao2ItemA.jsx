import React, {Component} from 'react'

import dados from '../../dados/q2/itemA.csv'

export default class Questao2ItemA extends Component{
    render(){
        return (
            <div className='container'>
                
                <div className='columns'>
                    <div className='column col-6'>
                        <h5><strong>Informações Extras</strong></h5>
                        <p>
                            Nesse dataset um problema que nos custou um tempo muito grande foi o fato do Scala informar um erro de NullPointerException para a entrada de dados que estava nula dentro do json, foram uns 2 dias perdidos devido a esse erro
                            mas no fim, deu quase tudo certo :p O tratamento dos dados foi similar/igual aos da primeira questão.
                        </p>

                        <h3>Palavras mais utilizadas nas Avaliações</h3>
                        <h5><strong>Como Foi Feito</strong></h5>
                        <p>Aqui nós fizemos o mesmo procedimento do item B da primeira questão, pegamos o texto, quebramos com o split, e demos um map+reduce para contar os itens mais exibidos, aqui foi aplicado um filtro de tags para excluir palavras sem conteudo como "you", "i", "of", e etc.</p>
                        <br />
                        
                    </div>
                    <div className='column col-6'>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Palavra</th>
                                    <th>Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dados.slice(0,30).map(row => {
                                    return (
                                    <tr>
                                        <td>{row._1}</td>
                                        <td>{row._2}</td>
                                    </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        )
    }
}