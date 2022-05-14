import React, { useEffect, useState }from 'react'
import { membersCell } from '../../mock'
import * as S from './styles'
import { dataText } from '../../common/constants/dataText'

export default function CardMember() {

	const [member, setMember] = useState()

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setMember(localStorage.getItem('member'))
		}
	}, [])

	return (
		<S.Container>
			{
				membersCell.map(members => (
					<S.Card key={members.name}>
						<S.BoxHeader>
							<img src={members.image} alt="foto de perfil" />
							<h2>{members.title}</h2>
						</S.BoxHeader>
						<S.BoxText>
							<p>{members.name}</p>
							{ member && <p>{dataText.PHONE} <span>{members.phone}</span></p>}
							<p>{dataText.BIRTHDATE} <span>{members.birthDate}</span></p>
							<p>{members.email}</p>
							<p>{dataText.FUNCTION} <span>{members.function}</span></p>
							<p>{dataText.SINCE} <span>{members.since}</span></p>
						</S.BoxText>
					</S.Card>
				))
			}
		</S.Container>
	)
}
