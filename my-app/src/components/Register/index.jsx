import React, { useState } from 'react'
import axios from 'axios'
import InputMask from 'react-input-mask'
import BannerWords from '../BannerWords'
import * as S from './styles'


export default function Register() {

	const [name, setName] = useState()
	const [title, setTitle] = useState()
	const [phone, setPhone] = useState()
	const [image, setImage] = useState()
	const [birthDate, setBirthDate] = useState()
	const [email, setEmail] = useState()
	const [office, setOffice] = useState()
	const [since, setSince] = useState()
	const [monitoring, setMonitoring] = useState()

	const url = 'https://tcc-fpr-default-rtdb.firebaseio.com/members.json'

	const register = () => {
		try {
			axios.post(url, {
				name: name,
				title: title,
				phone: phone,
				image: image,
				function: office,
				email: email,
				birthDate: birthDate,
				since: since,
			})
				.then(function () {
					alert('Cadastro realizado com sucesso')
					window.location.href='/members'
					setMonitoring(!monitoring)
				}).catch(() => {
				})
		} catch (e) {
			throw new Error('Algo deu errado na conexão')
		}
	}
	return (
		<>
			<S.Banner>
				<BannerWords title='Cadastrar novos membros' />
			</S.Banner>
			<S.Register>
				<S.Formulary>
					<S.Label>Apelido</S.Label>
					<S.Input
						type='search'
						required
						onChange={(e) => setTitle(e.target.value)}
					/>
					<S.Label>Nome Completo</S.Label>
					<S.Input
						type='search'
						required
						onChange={(e) => setName(e.target.value)}
					/>
					<S.InputMaskTel>
						<S.Label>Telefone</S.Label>
						<InputMask
							type='tel'
							mask='(99) 99999-9999'
							required
							onChange={(e) => setPhone(e.target.value)}
						/>
					</S.InputMaskTel>
					<S.Label>Foto de perfil</S.Label>
					<S.Input
						type='text'
						placeholder='url da imagem'
						onChange={(e) => setImage(e.target.value)}
					/>
					<S.Label>Cargo</S.Label>
					<S.Select
						required
						onChange={(e) => setOffice(e.target.value)}>
						<option>Selecione</option>
						<option value='Membro'>Membro</option>
						<option value='Visitante'>Visitante</option>
					</S.Select>
					<S.Label>Email</S.Label>
					<S.Input
						type='email'
						required
						placeholder='seuemail@email.com'
						onChange={(e) => setEmail(e.target.value)}
					/>
					<S.Label>Data de nascimento</S.Label>
					<S.Input
						type='date'
						required
						onChange={(e) => setBirthDate(e.target.value)}
					/>
					<S.Label>Quando entrou na célula?</S.Label>
					<S.Input
						type='month'
						onChange={(e) => setSince(e.target.value)}
					/>
					<S.Button
						onClick={(e) => {
							e.preventDefault()
							name && phone && title && birthDate && office && email
								? register()
								: alert('preencha todos os campos')
						}}>
            Cadastrar
					</S.Button>
				</S.Formulary>
			</S.Register>
		</>
	)
}