import React from 'react'
import Head from 'next/head'
import Form from '../components/Login'
import * as S from './login/styles'

export default function Login() {
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