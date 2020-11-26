import React, {useState} from 'react';
import Modal from '../Modal';

const CadastrarFornecedor: React.FC = () => {

  const[isModalVisible, setIsModalVisible] = useState(false);

  function cadastrar(){

  }

  return(

    <div>
      <button className="button" onClick={()=>setIsModalVisible(true)}>Cadastrar fornecedor</button>
      {isModalVisible ?
        <Modal children={
            <>
              <div className="content">
                <h3 className="title">Cadastrar fornecedor</h3>
                <form onSubmit = {cadastrar} >
                  <div className="line">
                    <label htmlFor="nome" className="input-name">Nome</label>
                    <input type="text" name="nome" id="nome" className="input" placeholder="Insira o nome do fornecedor" />
                  </div>
                  <div className="line ">
                    <label htmlFor="cnpj" className="input-name">CNPJ</label>
                    <input type="text" name="cnpj" id="cnpj" className="input"/>
                    <label htmlFor="categoria" className="input-name">Categoria</label>
                    <input type="text" name="categoria" id="categoria" className="input"/>
                  </div>
                  <div>
                    <button type="submit" className="button">Cadastrar</button>
                  </div>
                </form>
              </div>

            </>
        } ></Modal> : null}
    </div>

  )

}

export default CadastrarFornecedor
