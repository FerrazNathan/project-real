import React from 'react'
import BannerWords from '../BannerWords'
import { vision, target } from '../../mock'
import { GoLocation } from 'react-icons/go'
import { BsCalendarDate } from 'react-icons/bs'
import { FiClock } from 'react-icons/fi'
import * as S from './styles'

export default function InformativeCell() {
	return (
		<>
			<BannerWords title='Informações importantes' />
			<S.ContentMain>
				<S.TextTitle>Informaçãoes sobre a Célula</S.TextTitle>
				<S.TextBody>Nossa célula acontece uma vez por semana</S.TextBody>
				<S.ContainerText>
					<GoLocation />
					<S.TextBody>Ribeirão Pires</S.TextBody>
				</S.ContainerText>
				<S.ContainerText>
					<BsCalendarDate />
					<S.TextBody>Semanal</S.TextBody>
				</S.ContainerText>
				<S.ContainerText>
					<FiClock />
					<S.TextBody>20:30</S.TextBody>
				</S.ContainerText>
				<S.ContainerText>
					<S.TextBody>Venha fazer parte da célula você também</S.TextBody>
				</S.ContainerText>

				<S.TextTitle>Nossa Visão</S.TextTitle>
				{ vision.map((text, index) => {
					return <S.TextBody key={index}>{text.text}</S.TextBody>					
				})}

				<S.TextTitle>Nossos alvos</S.TextTitle>
				{target.map((text, index) => {
					return <S.TextBody key={index}>{text.text}</S.TextBody>
				})}
			</S.ContentMain>
		</>
	)
}
