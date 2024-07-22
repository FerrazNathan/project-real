import React from 'react'
import { useRouter } from 'next/router'
import * as S from './styles'
import { redirect } from '../../utils'
import { dataText } from '../../common/constants/dataText'
import { FaSignOutAlt } from 'react-icons/fa'

export default function Header() {

	const redirectPage = useRouter()

	const clearing = () => {
		if (typeof window !== 'undefined') {
			localStorage.removeItem('member')
			redirectPage.push('/login')
		}
	}

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
				</ul>
			</S.ContentHeader>
			<S.Button>
				<FaSignOutAlt onClick={() => clearing()}/>
			</S.Button>
		</S.Container>
	)
}