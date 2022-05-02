import React from 'react'
import * as S from './styles'
import { redirect } from '../../utils'
import { dataText } from '../../src/common/constants/dataText'

export default function Header() {
	return (
		<S.ContentHeader>
			<S.Text>
				<h1>{dataText.TITLE}</h1>
				<h2>{dataText.SUBTITLE}</h2>
			</S.Text>
			<ul>
				<li onClick={() => redirect('/')}>Home</li>
				<li onClick={() => redirect('/membros')}>Membros</li>
				<li onClick={() => redirect('/palavras')}>Palavras</li>
				<li onClick={() => redirect('/eventos')}>Eventos</li>
				<li onClick={() => redirect('/testemunhos')}>Testemunhos</li>
				<li onClick={() => redirect('/nossa-celula')}>Nossa célula</li>
				<li onClick={() => redirect('/contatos')}>Contatos</li>
			</ul>
		</S.ContentHeader>
	)
}