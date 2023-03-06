import { Container } from "../TransactionsTable/styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2023</td>
          </tr>
          <tr>
            <td>Mercado</td>
            <td className="withdraw">- R$150</td>
            <td>Compras</td>
            <td>25/02/2023</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
