import Modal from "react-modal";
import { useState } from "react";
import { useTransactions } from "../../Hooks/useTransactions";

import { Container, TransactionTypeContainer, RadioBox } from "./styles";

import closeImg from "../../images/x.png";
import incomeImg from "../../images/income.png";
import outcomeImg from "../../images/outcome.png";

export function NewTransactionModal({ isOpen, onRequestClose }) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");

  async function handleCreateNewTransation(event) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });
    //limpar e fechar modal
    setTitle("");
    setAmount(0);
    setCategory('');
    setType('desposit');
    onRequestClose();
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

        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            className="income"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            className="outcome"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button className="submit" type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}
