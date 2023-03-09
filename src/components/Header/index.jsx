
import logo from "../../images/logo.png";
import { Container, Content } from "./styles";

export function Header({ onOpenNewTransactionModal }) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
  
      </Content>
    </Container>
  );
}
