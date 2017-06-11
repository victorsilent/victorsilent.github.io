import React, {Component} from 'react'

export default class Home extends Component{
    render(){
        return (
            <div className='container grid-1280'>
                <div className='columns'>
                    <div className='column'>
                        <h2>Trabalho de Mineração de Dados</h2>
                        <h4> <small>Sistemas de Informação Distribuidos - CK107</small></h4>

                        <h4>Sobre a Execução do Trabalho</h4>
                        <p>
                            Antes da análise dos dados foram feitas alguns ajustes para que fosse possível tratá-los dentro do spark,
                            como conversão de datas para o formato timestamp, alem da exclusão de algumas tags dos campos de texto que causaram alguns erros durante o parse.
                        </p>

                        <h4>Equipe</h4>
                        <ul>
                            <li>João Victor</li>
                            <li>Esdras Lemos</li>
                            <li>Stenio Wagner</li>
                            <li>César Rodrigues</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}