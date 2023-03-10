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
        border: 1px solid #d7d7d7;
        background: #cfd0d5;
        font-weight: 400;
        font-size: 1rem;
        
        & + input {
            margin-top: 1rem;
        }
    }

    button {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background:var(--green);
        color: #FFF;
        border-radius: 0.25rem;
        border:0;
        font-size:1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover {
            filter:brightness(0.9);
        }
    }
`; 