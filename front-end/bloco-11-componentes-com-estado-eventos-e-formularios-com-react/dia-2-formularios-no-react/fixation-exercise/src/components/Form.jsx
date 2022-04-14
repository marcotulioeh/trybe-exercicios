import React from 'react';
import MyInput from './MyInput';

class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      estado: '',
      nome: '',
      password: '',
      sugestões: '',
      checked: false,
    }
  }
  
  handlerChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { estado, nome, password, sugestões, checked } = this.state;
    return (
      <div>
        <h1>FORMULÁRIO</h1>
        <form action="">
          <label htmlFor="">
            Estado:
            <select
              name="estado" id=""
              value={ estado }
              onChange={this.handlerChange}
            >
              <option value="">----Selecione----</option>
              <option value="Minas Gerais">Minas Gerais</option>
              <option value="São Paulo">São Pualo</option>
            </select>
          </label>

          <br />
          <br />

          <MyInput
            description='Nome:'
            type='text'
            name='nome'
            value={ nome }
            func={ this.handlerChange}
          />

          <br />

          <MyInput
            description='Senha:'
            type='password'
            name='password'
            value={ password }
            func={ this.handlerChange}
          />

          <br />

          <MyInput
            description='Aceito os termos:'
            type='checkbox'
            name='checked'
            value={ checked }
            func={ this.handlerChange}
          />

          <br />
          <br />

          <label htmlFor="text-area">
            Sugestões:
            <textarea
              name="sugestões"
              id="text-area"
              value={ sugestões }
              onChange={this.handlerChange}
            ></textarea>
          </label>

        </form>
      </div>
    );
  }
}

export default Form;