import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -6rem;

  div {
    background: var(--gray-lighter);
    padding: 1.5rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block; //faz o strong se comportar como uma div, ao inves de estar por padrao no inline
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight {
      background: var(--green);
      color: #fff;
    }
  }
`;
