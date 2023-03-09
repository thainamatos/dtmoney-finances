import Modal from "react-modal";
import { Container } from "./styles";
import closeImg from '../../images/x.png';

export function NewTransactionModal({ isOpen, onRequestClose }) {
  return (
    <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose} overlayClassName="react-modal-overlay"
        className='react-modal-content'
    >
        <button type="button" onClick={onRequestClose}>
            <img src={closeImg}
            alt="Fechar modal" />
        </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Titulo" />

        <input type="number" placeholder="Valor" />

        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>

      </Container>
    </Modal>
  );
}
