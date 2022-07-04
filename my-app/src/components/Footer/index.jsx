import React from 'react'
import Contact from '../Contact'
import { redirect } from '../../utils'
import { dataText } from '../../common/constants/dataText'
import * as S from './styles'

export default function Header() {
	return (
		<S.Container>
			<S.ContentFooter>
				<ul>
					<li onClick={() => redirect('/home')}>Home</li>
					<li onClick={() => redirect('/members')}>Membros</li>
					<li onClick={() => redirect('/words')}>Palavras</li>
					<li onClick={() => redirect('/events')}>Eventos</li>
					<li onClick={() => redirect('/testimonies')}>Testemunhos</li>
					<li onClick={() => redirect('/ourCell')}>Nossa célula</li>
				</ul>
				<S.Text>
					<h1>{dataText.TITLE}</h1>
					<S.ContentContact>
						<Contact />
					</S.ContentContact>
				</S.Text>
			</S.ContentFooter>
		</S.Container>
	)
}
