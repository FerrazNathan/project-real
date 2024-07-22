import React from 'react'
import Contact from '../Contact'
import { dataText } from '../../common/constants/dataText'
import * as S from './styles'

export default function Header() {
	return (
		<S.Container>
			<S.ContentFooter>
				<S.Text>
					<h1>{dataText.TITLE}</h1>
				</S.Text>
			</S.ContentFooter>
			<S.ContentContact>
				<p>&copy;2024 All Rights Reserved - Desenvolvido por Nathan Ferraz</p>
				<Contact />
			</S.ContentContact>
		</S.Container>
	)
}
