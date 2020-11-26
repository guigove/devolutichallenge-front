import React, {useState} from 'react';
import Modal from '../Modal';
import './style.css';

const CadastrarFornecedor: React.FC = (props) => {

  const[isModalVisible, setIsModalVisible] = useState(false);
  const[produto, setProduto] = useState('');
  const[fornecedor, setFornecedor] = useState('');
  const[codigo, setCodigo] = useState('');
  const[categoria, setCategoria] = useState('');

  function cadastrar(){

  }

  return(

    <div>
      <button className="button" onClick={()=>setIsModalVisible(true)}>Cadastrar produto</button>
      {isModalVisible ?
        <Modal children={
            <>
              <div>
                <h3 className="title">Cadastrar produto</h3>
                <form onSubmit = {cadastrar} >
                  <div className="line">
                    <label htmlFor="nome-produto" className="input-name">Nome do produto</label>
                    <input type="text" name="nome-produto" id="nome-produto" className="input" placeholder="Insira o nome do produto" onChange ={e =>setProduto(e.target.value)} />
                  </div>
                  <div className="line">
                    <label htmlFor="nome-fornecedor" className="input-name">Fornecedor</label>
                    <input type="text" name="nome-fornecedor" id="nome-fornecedor" className="input" placeholder="Insira o nome do fornecedor" onChange ={e =>setFornecedor(e.target.value)}/>
                  </div>
                  <div className="line">
                    <label htmlFor="codigo" className="input-name">Código do produto</label>
                    <input type="number" name="codigo" id="codigo" className="input" onChange ={e =>setCodigo(e.target.value)}/>
                    <label htmlFor="categoria" className="input-name">Categoria</label>
                    <input type="text" name="categoria" id="categoria" className="input" onChange ={e =>setCategoria(e.target.value)}/>
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
