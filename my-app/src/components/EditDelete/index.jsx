import React, { useEffect, useState } from 'react'
import * as S from './styles'
import axios from 'axios'
import InputMask from 'react-input-mask'

export default function EditDelete() {
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

	const url = 'https://tcc-fpr-default-rtdb.firebaseio.com/members.json'

	useEffect(() => {
		try {
			axios
				.get(url)
				.then(function (response) {
					setResponseData(response.data)
				})
				.catch(() => { })
		} catch (e) {
			throw new Error('Algo deu errado na conexão')
		}
	}, [monitoring])

	const deleting = (id) => {
		try {
			axios
				.delete(
					`https://tcc-fpr-default-rtdb.firebaseio.com/members/${id}.json`,
					{}
				)
				.then(function () {
					setMonitoring(!monitoring)
				})
				.catch(() => { })
		} catch (e) {
			throw new Error('Algo deu errado na conexão')
		}
	}

	const editing = (id) => {
		axios
			.patch(`https://tcc-fpr-default-rtdb.firebaseio.com/members/${id}.json`, {
				title: title,
				name: name,
				phone: phone,
				birthDate: birthDate,
				email: email,
				office: office,
				since: since,
				image: image,
			})
			.then(function () {
				setMonitoring(!monitoring)
			})
			.catch(() => {
				throw new Error('Algo deu errado na conexão')
			})
	}
	//FUNÇÃO PARA BLOQUEAR O ACESSO DE USUARIOS DIFERENTES DO LÍDER DIRETO PELA URL
	useEffect(() => {
		const response = localStorage.getItem('name')
		if (response !== 'Felipe') {
			window.location.replace('/members')
		}
	}, [])

	return (
		<S.Container>
			{responseData &&
				Object.entries(responseData).map((item) => {
					return (
						<S.Card key={item}>
							<S.DivInputButton>
								<img src={item[1].image} />
								<S.Input
									type="text"
									placeholder="url da imagem"
									onChange={(e) => setImage(e.target.value)}
								/>
								<S.Button onClick={() => editing(item[0])}>Editar</S.Button>
							</S.DivInputButton>
							<S.DivInputButton>
								<h3>Apelido</h3>
								<p>{item[1].title}</p>
								<S.Input
									type="search"
									required
									onChange={(e) => setTitle(e.target.value)}
								/>
								<S.Button onClick={() => editing(item[0])}>Editar</S.Button>
							</S.DivInputButton>
							<S.DivInputButton>
								<h3>Nome Completo</h3>
								<p>{item[1].name}</p>
								<S.Input
									type="search"
									required
									onChange={(e) => setName(e.target.value)}
								/>
								<S.Button onClick={() => editing(item[0])}>Editar</S.Button>
							</S.DivInputButton>
							<S.DivInputButton>
								<h3>Telefone</h3>
								<p>{item[1].phone}</p>
								<S.InputMaskTel>
									<InputMask
										type="tel"
										mask="(99) 99999-9999"
										required
										onChange={(e) => setPhone(e.target.value)}
									/>
									<S.Button onClick={() => editing(item[0])}>Editar</S.Button>
								</S.InputMaskTel>
							</S.DivInputButton>
							<S.DivInputButton>
								<h3>Data de nascimento</h3>
								<p> {item[1].birthDate}</p>
								<S.Input
									type="date"
									required
									onChange={(e) => setBirthDate(e.target.value)}
								/>
								<S.Button onClick={() => editing(item[0])}>Editar</S.Button>
							</S.DivInputButton>
							<S.DivInputButton>
								<h3>Email</h3>
								<p>{item[1].email}</p>
								<S.Input
									type="email"
									required
									placeholder="seuemail@email.com"
									onChange={(e) => setEmail(e.target.value)}
								/>
								<S.Button onClick={() => editing(item[0])}>Editar</S.Button>
							</S.DivInputButton>
							<S.DivInputButton>
								<h3>Cargo</h3>
								<p> {item[1].function} </p>
								<S.Select required onChange={(e) => setOffice(e.target.value)}>
									<option>Selecione</option>
									<option value="Membro">Membro</option>
									<option value="Visitante">Visitante</option>
									<option value="Líder">Líder</option>
									<option value="Líder em treinamento">
										Líder em treinamento
									</option>
								</S.Select>
								<S.Button onClick={() => editing(item[0])}>Editar</S.Button>
							</S.DivInputButton>
							<S.DivInputButton>
								<h3>Quando entrou na célula?</h3>
								<p> {item[1].since}</p>
								<S.Input
									type="month"
									onChange={(e) => setSince(e.target.value)}
								/>
								<S.Button onClick={() => editing(item[0])}>Editar</S.Button>
							</S.DivInputButton>
							<S.ButtonRemove onClick={() => deleting(item[0])}>
								Remover
							</S.ButtonRemove>
						</S.Card>
					)
				})}
		</S.Container>
	)
}
