import React, {Component} from 'react'

import dados from '../../dados/itemA/manha.csv'

export default class ItemA extends Component{
    render(){
        return (
            <div className='container'>
                
                <div className='columns'>
                    <div className='column col-6'>
                        <h3>Análise tweets por horario</h3>
                        <h5><strong>Como Foi Feito</strong></h5>
                        <article>
                            <p>
                                <strong>Hashtags manhã tarde...</strong> <br />
                                Para esta analise o mindset foi:
                                filtrar o dataframe para pegar apenas as linhas que possussem o campo de tweet com o caractere "#"
                                Após isso, pegamos o texto completo e damos um split, de modo a quebrar o texto em palavras e filtramos essas palavras com um regex
                                esse regex aceita apenas hashtags, desse modo vamos ter um dataframe onde cada linha é uma hashtag, depois damos um map+reduce para contar quantas vezes cada hashtag apareceu
                                Para dividirmos os tweets entre manhã tarde e noite, efetuamos um filtro com o between com os intervalos
                                <br /><br />
                                00:00 ~ 11:59 MANHÃ<br />
                                12:00 ~ 17:59 TARDE<br />
                                18:00 ~ 23:59 NOITE<br />
                            </p>
                            <br />
                            <h5><strong>Informações Extras</strong></h5>
                            <p>
                                <strong>Problemas desse item: </strong>
                                Por algum motivo desconhecido, algumas hashtags apresentaram problemas de repetição, porem analisando caractere por caractere foi constatado que os itens se tratavam de palavras diferentes, onde a letra M era representada ora por um valor na tabela ascii ora por outro.
                            </p>
                        </article>
                    </div>
                    <div className='column col-6'>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Hashtag</th>
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