import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		--backgroud: #202024;

		--red-dark: #ee414ff7;
		--red: #F75A68;

		--green-dark: #015F43;
		--green: #00b47e;
		--green-light: #00B37E;

		--gray-dark: #121214;
		--gray: #202024;
		--gray-light: #29292E;
		--gray-lighter: #323238;

		--text-title: #E1E1E6;
		--text-body: #C4C4CC;

		--shape: #323238;
		
	}

	* {
		margin:0;
		padding:0;
		box-sizing: border-box;
	}

	html {
		@media (max-width: 1080px) {
			font-size: 93.75% // 16px * 0.9375 = 15px
		}
		@media (max-width: 720px) {
			font-size: 87.5% // 16px * 0.875 = 14px
		}
	}
	
	body {
		background: var(--backgroud);
		-webkit-font-smoothing: antialiased; //deixa fontes mais nitidas
	}
	body, input, textarea, button {
		font-family: 'Poppins' , sans-serif;
		font-weight: 400;
	}
	h1, h2, h3, h4, h5, h6, strong {
		font-weight: 600;
	}
	button {
		cursor: pointer;
	}
	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}
	.react-modal-overlay {
		background: rgba(0,0,0,0.5);
		position: fixed;
		top:0;
		bottom:0;
		right:0;
		left:0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.react-modal-content {
		width: 100%;
		max-width: 576px;
		background: var(--backgroud);
		padding: 3rem;
		position: relative;
		border-radius: 0.25rem;
	}
	.react-modal-close{
		position: absolute;
		right: 1.5rem;
		top: 1.5rem;
		border: 0;
		background: transparent;
		transition: filter 0.2s;
		&:hover{
			filter: brightness(0.8);
		}
	}
`;