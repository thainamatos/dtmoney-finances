import Modal from "react-modal";
import { useState } from "react";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import closeImg from "../../images/x.png";
import incomeImg from "../../images/income.png";
import outcomeImg from "../../images/outcome.png";

import { api } from '../../servives/api';

export function NewTransactionModal({ isOpen, onRequestClose }) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');

  function handleCreateNewTransation(event) {
    event.preventDefault();

    const data = { 
      title,
      value,
      category,
      type,
    }
    
    api.post('/transactions', data)
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransation}>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Titulo" value={title} onChange={event => setTitle(event.target.value)} />

        <input type="number" placeholder="Valor" value={value} onChange={event => setValue(Number(event.target.value))} />

        <TransactionTypeContainer>
          <RadioBox 
            type="button"
            className="income"
            onClick={()=> {
              setType('deposit');
            }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type="button"
            className="outcome"
            onClick={()=> {
              setType('withdraw');
            }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>

        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)}/>

        <button className="submit" type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
