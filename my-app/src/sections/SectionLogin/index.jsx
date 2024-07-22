import React from 'react'
import Head from 'next/head'
import Form from '../../components/Login'

import * as S from './styles'

export default function SectionLogin() {
	return (
		<>
			<Head>
				<title>Célula 30</title>
			</Head>
			<S.BoxComponents>
				<Form />
			</S.BoxComponents>
		</>
	)
}