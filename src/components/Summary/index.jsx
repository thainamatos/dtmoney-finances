import React, {useContext} from "react";
import { Container } from "./styles";
import incomeImg from "../../images/income.png";
import outcomeImg from "../../images/outcome.png";
import total from "../../images/dollar.png";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const data = useContext(TransactionsContext);
  
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>R$ 250,00</strong>
      </div>
      <div className="highlight">
        <header>
          <p>Total</p>
          <img src={total} alt="" />
        </header>
        <strong>R$ 750,00</strong>
      </div>
    </Container>
  );
}
