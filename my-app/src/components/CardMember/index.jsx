import React, { useEffect, useState } from 'react'
import BannerWords from '../BannerWords'
import axios from 'axios'
import * as S from './styles'
import { dataText } from '../../common/constants/dataText'
import InputMask from 'react-input-mask'
import masculino from '../../../public/masculino.jpg'

export default function CardMember() {

	const [member, setMember] = useState()
	const [responseData, setResponseData] = useState()
	const [name, setName] = useState()
	const [title, setTitle] = useState()
	const [phone, setPhone] = useState()
	const [image, setImage] = useState()
	const [birthDate, setBirthDate] = useState()
	const [email, setEmail] = useState()
	const [office, setOffice] = useState()
	const [since, setSince] = useState()
	const [monitoring, setMonitoring] = useState()

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setMember(localStorage.getItem('member'))
		}
	}, [])

	const url = 'https://tcc-fpr-default-rtdb.firebaseio.com/members.json'

	useEffect(() => {
		axios.get(url)
			.then(function (response) {
				setResponseData(Object.entries(response.data))
			})
	}, [])

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
				.then(function (response) {
					setResponseData(Object.entries(response.data))
					alert('Cadastro realizado com sucesso')
					setMonitoring(!monitoring)
				}).catch(() => {
				})
		} catch (e) {
			throw new Error('Algo deu errado na conexão')
		}
	}

	return (
		<S.Container>
			{
				responseData && Object.values(responseData).map((members) => (
					<S.Card key={members[1].name}>
						<S.BoxHeader>
							<img src={members[1].image ? (members[1].image) : (masculino)} alt="foto de perfil" />
							<h2>{members[1].title}</h2>
						</S.BoxHeader>
						<S.BoxText>
							<p>{members[1].name}</p>
							{member && <p>{dataText.PHONE} <span>{members[1].phone}</span></p>}
							<p>{dataText.BIRTHDATE} <span>{members[1].birthDate}</span></p>
							{member && <p>{members[1].email}</p>}
							<p>{dataText.FUNCTION} <span>{members[1].function}</span></p>
							<p>{dataText.SINCE} <span>{members[1].since}</span></p>
						</S.BoxText>
					</S.Card>
				))
			}
			<S.Register>
				{member &&
					<>
						<BannerWords title='Registrar novos membros' />
						<S.Formulary>
							<S.Label>Apelido</S.Label>
							<S.Input
								type='text'
								required
								onChange={(e) => setTitle(e.target.value)}
							/>
							<S.Label>Nome Completo</S.Label>
							<S.Input
								type='text'
								required
								onChange={(e) => setName(e.target.value)}
							/>
							<S.Label>Telefone</S.Label>
							<InputMask
								type='tel'
								mask='(99) 99999-9999'
								required
								onChange={(e) => setPhone(e.target.value)}
							/>
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
									register()
								}}>
								Cadastrar
							</S.Button>
						</S.Formulary>
					</>
				}
			</S.Register>
		</S.Container>
	)
}
