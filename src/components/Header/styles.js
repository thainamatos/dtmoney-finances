import styled from "styled-components";

export const Container = styled.header`
  background: var(--gray-dark);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2.5rem 1rem 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
    font-size:1rem;
    color: #fff;
    background: var(--green-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    cursor: pointer;
    transition: 0.2s;

    &:hover{
      filter: brightness(0.9)
    }
  }
`;
