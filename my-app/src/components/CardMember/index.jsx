import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { membersCell } from '../../mock'
import * as S from './styles'
import { dataText } from '../../common/constants/dataText'

export default function CardMember() {

	const [member, setMember] = useState()
	const [responseData, setResponseData] = useState()

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

	console.log('o que chega aqui =>', responseData)

	return (
		<S.Container>
			{
				responseData && Object.values(responseData).map((members) => (
					<S.Card key={members[1].name}>
						<S.BoxHeader>
							{/* <img src={members.image} alt="foto de perfil" /> */}
							<h2>{members[1].title}</h2>
						</S.BoxHeader>
						<S.BoxText>
							<p>{members[1].name}</p>
							{member && <p>{dataText.PHONE} <span>{members[1].phone}</span></p>}
							<p>{dataText.BIRTHDATE} <span>{members[1].birthDate}</span></p>
							<p>{members.email}</p>
							<p>{dataText.FUNCTION} <span>{members[1].function}</span></p>
							<p>{dataText.SINCE} <span>{members[1].since}</span></p>
						</S.BoxText>
					</S.Card>
				))
			}
		</S.Container>
	)
}
