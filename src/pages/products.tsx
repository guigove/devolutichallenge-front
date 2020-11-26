import React, { useState, useEffect } from 'react';
import api from '../services/api';
import Button from '../components/Buttons/btnCadastrarProdutos';
import './style.css';


const Products: React.FC = () => {

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

  let arrayProd:any = [] ;
  produtos.map((prod:any, index) =>{
    let fornecedor = '';
    fornecedores.map((forn:any)=>{
        if(prod.provider_id == forn.id){
          fornecedor = forn.name;
        }
    })
    arrayProd[index] = {...prod, provider:fornecedor}
  })

  arrayProd.sort( (a:any, b:any) => {
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
        <h3 className="name-page">Produtos</h3>
        <Button/>
      </div>
      <table >
        <thead>
          <tr>
            <td>Nome</td>
            <td>Código</td>
            <td>Categoria</td>
            <td>Fornecedor</td>
          </tr>
        </thead>
        <tbody >
          {
            arrayProd.map((value:any) => (
              <>
                <tr>
                  <th>
                    {value.name}
                  </th>
                  <th>
                    {value.code}
                  </th>
                  <th>
                    {value.category}
                  </th>
                  <th>
                    {value.provider}
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

function productsFilter(filter:any){

  // const [fornecedores, setFornecedores] = useState([]);

  // const [produtos, setProdutos] = useState([]);

  // useEffect (()=>{

  //   api.get('products')
  //   .then(response =>{
  //     setProdutos(response.data);
  //   });

  //   api.get('providers')
  //   .then(response =>{
  //     setFornecedores(response.data);
  //   });

  // }, []);
}

export default Products


