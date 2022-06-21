import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as S from './styles'
import { dataText } from '../../common/constants/dataText'
import { redirect } from '../../utils'
// import Register from '../Register'

export default function CardMember() {
	const [member, setMember] = useState()
	const [responseData, setResponseData] = useState()
	const [search, setSearch] = useState('')

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setMember(localStorage.getItem('name'))
		}
	}, [])

	const url = 'https://tcc-fpr-default-rtdb.firebaseio.com/members.json'

	useEffect(() => {
		axios.get(url).then(function (response) {
			setResponseData(Object.entries(response.data))
		})
	}, [])

	// FUNÇÃO QUE FAZ EXIBIR A LISTA DE MEMBROS EM ORDEM ALFABÉTICA
	responseData?.sort(function (a, b) {
		if (a[1].name < b[1].name) {
			return -1
		} else {
			return 1
		}
	})

	return (
		<>
			<S.ContentSearch>
				<S.ContentLabelInputSearch>
					<S.LabelInputSearch>Pesquise por nossos membros</S.LabelInputSearch>
					<S.InputSearch
						type="search"
						value={search}
						placeholder="Pesquise por um membro da célula..."
						onChange={(e) => setSearch(e.target.value)}
					/>
				</S.ContentLabelInputSearch>
				{member === 'Felipe' && (
					<S.Button onClick={() => redirect('/register')}>
						Cadastrar novos membros
					</S.Button>
				)}
			</S.ContentSearch>
			<S.Container>
				{responseData &&
					Object.values(responseData)
						.filter((value) => {
							if (search === '') {
								return value
							} else if (
								value[1].name.toLowerCase().includes(search.toLowerCase()) ||
								value[1].title.toLowerCase().includes(search.toLowerCase())
							) {
								return value
							}
						})
						.map((members) => (
							<S.Card key={members[1].name}>
								<S.BoxHeader>
									<img
										src={
											members[1].image
												? members[1].image
												: 'https://uploaddeimagens.com.br/images/003/891/238/original/masculino.jpg'
										}
										alt="foto de perfil"
									/>
								</S.BoxHeader>
								<S.BoxText>
									<h2>{members[1].title}</h2>
									<p>{members[1].name}</p>
									{member && (
										<p>
											{dataText.PHONE} <span> {members[1].phone}</span>
										</p>
									)}
									<p>
										{dataText.BIRTHDATE}
										<span> {members[1].birthDate}</span>
									</p>
									{member && <p>{members[1].email}</p>}
									<p>
										{dataText.FUNCTION}
										<span> {members[1].function} </span>
									</p>
									<p>
										{dataText.SINCE}
										<span> {members[1].since}</span>
									</p>
								</S.BoxText>
							</S.Card>
						))}
			</S.Container>
		</>
	)
}
