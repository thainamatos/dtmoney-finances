import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid var(--gray);
    background: var(--gray-dark);
    font-weight: 400;
    font-size: 1rem;
    color: #fff;

    & + input {
      margin-top: 1rem;
    }
  }

  button.submit {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

const colors = {
  green: "#00b37d53",
  red: "#ee414f47",
};

export const RadioBox = styled.button`
  height: 4rem;
  border: 1px solid var(--gray-light);
  border-radius: 0.25rem;
  background: ${(props) =>
    props.isActive ? colors[props.activeColor] : "#29292E"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
