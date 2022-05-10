import React, { useState } from 'react'
import { useRouter } from 'next/router'
import * as S from './styles'
import Error from '../Error'
import { dataText } from '../../common/constants/dataText'
import { redirect } from '../../utils'

export default function Form() {

	const [password, setPassword] = useState('')
	const [error, setError] = useState(false)
	
	const access = 'Celula08!'
	const redirectPage = useRouter()

	const submit = () => {
		// event.preventDefault()

		if (password === access) {
			localStorage.setItem('member', 'true')
			redirectPage.push('/home')
		}
		else {
			setError(true)
		}
	}

	return (
		<>
			{error && <Error />}
			<S.Container onSubmit={submit}>
				<S.Title>{dataText.TITLE}</S.Title>
				<S.Subtitle>{dataText.SUBTITLE}</S.Subtitle>
				<S.Input
					type="password"
					placeholder="Informe sua senha"
					value={password}
					onChange={(event) => setPassword(event.target.value)}
				/>
				<S.Buttons>
					<S.Button type='submit' onClick={() => submit()}>Já sou membro</S.Button>
					<S.Button type='button' onClick={() => redirect('/home')}>Entrar como convidado</S.Button>
				</S.Buttons>
			</S.Container>
		</>
	)
}