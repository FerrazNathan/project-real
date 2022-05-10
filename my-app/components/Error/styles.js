import styled from 'styled-components'

export const Container = styled.section`
	position: relative;
	width: 35vw;
	margin: 0 auto;
	@media (max-width: 480px){
		display: flex;
		align-items: center;
		justify-content: center;
	}
`

export const Content = styled.div`
	position: absolute;
	border: 1px solid #F0D882;
	width: 30vw;
	height: 220px;
	border-radius: 10px;
	text-align: center;
	margin: 20px auto;
  background-color: #143D59;
	font-family: 'Nunito Sans', sans-serif;
	margin-top: 55vh;
	& h1{
		color: #d82424;
	}
	& p{
		color: #F0D882;
		font-weight: 600;
		font-size: 20px;
	}
	@media (max-width: 480px){
		width: 90vw;
		margin-top: 92rem;
	}
`