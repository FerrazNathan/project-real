import React from 'react'
import * as S from './styles'
import { redirect } from '../../utils'
import { dataText } from '../../src/common/constants/dataText'

export default function Header() {
	return (
		<S.ContentFooter>
			<ul>
				<li onClick={() => redirect('/')}>Home</li>
				<li onClick={() => redirect('/members')}>Membros</li>
				<li onClick={() => redirect('/words')}>Palavras</li>
				<li onClick={() => redirect('/events')}>Eventos</li>
				<li onClick={() => redirect('/testimonies')}>Testemunhos</li>
				<li onClick={() => redirect('/ourCell')}>Nossa célula</li>
				<li onClick={() => redirect('/contacts')}>Contatos</li>
			</ul>
			<S.Text>
				<h1>{dataText.TITLE}</h1>
				<h2>{dataText.SUBTITLE}</h2>
			</S.Text>
		</S.ContentFooter>
	)
}