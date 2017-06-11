import React, {Component} from 'react'

export default class Questao2ItemE extends Component{
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
                        <h3>Mapeamento da Distribuição dos Sentimentos das Revisões</h3>
                        <p>
                          Com a ajuda da biblioteca CoreNLP-Scala geramos o nivel de sentimento para cada avaliação e depois agrupamos e demos um count.<br />
                          <strong>Devido a formo como utilizamos o spark, não conseguimos gerar o resultado desta analise.</strong>
                        </p>
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}