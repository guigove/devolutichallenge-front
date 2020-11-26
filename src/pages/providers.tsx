import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Button from '../components/Buttons/btnCadastrarFornecedor'
import './style.css';


const Providers: React.FC = () => {

  const [fornecedores, setFornecedores] = useState([]);

  const [produtos, setProdutos] = useState([]);

  useEffect (()=>{

    api.get('products')
    .then(response =>{
      setProdutos(response.data);
    });

    api.get('providers')
    .then(response =>{
      setFornecedores(response.data);
    });

  }, []);

  let arrayForn:any = [] ;
  fornecedores.map((forn:any, index) =>{
    let contador = 0;
    let categoria = '';
    produtos.map((prod:any)=>{
        if(forn.id == prod.provider_id){
          contador ++;
          categoria = prod.category;
        }
    })
    arrayForn[index] = {...forn, total:contador , categoriaForn:categoria}
  })

  arrayForn.sort( (a:any, b:any) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });

  return(
    <div>
     <div className="container-header">
        <h3 className="name-page">Fornecedores</h3>
        <Button/>
      </div>
      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td>CNPJ</td>
            <td>Categoria</td>
            <td>Total de produtos</td>
          </tr>
        </thead>
        <tbody>
          {
            arrayForn.map((value:any) => (
              <>
                <tr>
                  <th>
                    {value.name}
                  </th>
                  <th>
                    {value.document}
                  </th>
                  <th>
                    {value.categoriaForn}
                  </th>
                  <th>
                    {value.total}
                  </th>
                </tr>
              </>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Providers




