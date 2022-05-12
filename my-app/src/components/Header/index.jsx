import React from 'react'
import * as S from './styles'
import { redirect } from '../../utils'
import { dataText } from '../../common/constants/dataText'
// import { GoSignOut } from 'react-icons/go'

export default function Header() {
	return (
		<S.Container>
			<S.ContentHeader>
				<S.Text>
					<h1>{dataText.TITLE}</h1>
					<h2>{dataText.SUBTITLE}</h2>
				</S.Text>
				<ul>
					<li onClick={() => redirect('/home')}>Home</li>
					<li onClick={() => redirect('/members')}>Membros</li>
					<li onClick={() => redirect('/words')}>Palavras</li>
					<li onClick={() => redirect('/events')}>Eventos</li>
					<li onClick={() => redirect('/testimonies')}>Testemunhos</li>
					<li onClick={() => redirect('/ourCell')}>Nossa célula</li>
					<li onClick={() => redirect('/contacts')}>Contatos</li>
				</ul>
				<S.Icon>
					{/* <p><GoSignOut /></p> */}
				</S.Icon>
			</S.ContentHeader>
			<S.Button onClick={() => redirect('/login')}>
				Sair
			</S.Button>
		</S.Container>
	)
}