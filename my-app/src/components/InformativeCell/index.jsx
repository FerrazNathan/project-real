import React from 'react'
import BannerWords from '../BannerWords'
import { vision, target } from '../../mock'
import * as S from './styles'

export default function InformativeCell() {
	return (
		<>
			<BannerWords title='Informações importantes' />
			<S.ContentMain>
				<S.TextTitle>Informaçãoes sobre a Célula</S.TextTitle>
				<S.TextBody>Nossa célula acontece uma vez por semana</S.TextBody>
				<S.ContainerText>
					<S.TextBodySpan>Local: </S.TextBodySpan>
					<S.TextBody> A confirmar</S.TextBody>
				</S.ContainerText>
				<S.ContainerText>
					<S.TextBodySpan>Data: </S.TextBodySpan>
					<S.TextBody> A confirmar</S.TextBody>
				</S.ContainerText>
				<S.ContainerText>
					<S.TextBodySpan>Hora: </S.TextBodySpan>
					<S.TextBody> A confirmar</S.TextBody>
				</S.ContainerText>
				<S.ContainerText>
					<S.TextBody>Venha fazer parte da célula você também</S.TextBody>
				</S.ContainerText>

				<S.TextTitle>Nossa Visão</S.TextTitle>
				{ vision.map((text) => {
					return <S.TextBody key={text}>{text.text}</S.TextBody>					
				})}

				<S.TextTitle>Nossos alvos</S.TextTitle>
				{target.map((text) => {
					return <S.TextBody key={text}>{text.text}</S.TextBody>
				})}
			</S.ContentMain>
		</>
	)
}
