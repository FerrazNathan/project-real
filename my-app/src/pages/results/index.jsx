import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BannerWords from '../../components/BannerWords'
import { dataText } from '../../common/constants/dataText'
import * as S from './styles'
import {
	leader,
	birthDateCell,
	firstCellNumber,
	cellLocation,
	dayCell,
	communion,
	leaderArrived,
	shepherdName,
	disciplerName,
	howManyMembers,
} from '../../utils'
import Banner from '../../components/Banner'

export default function Results() {
	const [name, setName] = useState('')

	let params
	if (typeof window !== 'undefined') {
		params = new URLSearchParams(window.location.search)
	}

	let urlParams = undefined
	params &&
		params.forEach((value, key) => {
			urlParams = Object.assign({}, urlParams, {
				[key]: value.toString(),
			})
		})

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setName(localStorage.getItem('name'))
		}
	}, [])

	const conclusion = (response) => {
		switch (response) {
		case '0':
			return 'Infelizmente você não acertou nenhuma questão'
		case '1':
			return 'Que pena, Você acertou apenas 1 questão'
		case '2':
			return 'Que pena, Você acertou apenas 2 questões'
		case '3':
			return 'Que pena, Você acertou apenas 3 questões'
		case '4':
			return 'Interessante, Você acertou 4 questões'
		case '5':
			return 'Interessante, Você acertou 5 questões'
		case '6':
			return 'Legal, Você acertou 6 questões'
		case '7':
			return 'Você conhece bem a célula, acertou 7 questões'
		case '8':
			return 'Parabéns Você conhece muito bem a célula, acertou 8 questões'
		case '9':
			return 'Parabéns, Você foi quase perfeito, acertou 9 questões'
		case '10':
			return 'Parabéns Você conhece tudo sobre a nossa célula, acertou todas as questões'
		default:
			return 'Você não conseguiu responder as perguntas'
		}
	}

	return (
		<>
			<Header />
			<S.Banner>
				<Banner img="https://i1.wp.com/fmpsc.edu.br/wp-content/uploads/2018/12/saiu-o-resultado-banner-noticia-jpg.jpg" />
			</S.Banner>
			<BannerWords
				title="Essas foram as suas respostas"
				text={`${name ? name : ''} ${conclusion(urlParams?.answer)}`}
			/>
			<S.ListQuestions>
				<S.TextMain>
					{dataText.LEADER}
					<S.SpanText>{urlParams?.leader}</S.SpanText>
					{leader(urlParams)}
				</S.TextMain>
				<S.TextMain>
					{dataText.BIRTHDATECELL}
					<S.SpanText>{urlParams?.birthDateCell}</S.SpanText>
					{birthDateCell(urlParams)}
				</S.TextMain>
				<S.TextMain>
					{dataText.FIRSTCELLNUMBER}
					<S.SpanText>{urlParams?.firstCellNumber}</S.SpanText>
					{firstCellNumber(urlParams)}
				</S.TextMain>
				<S.TextMain>
					{dataText.CELLLOCATION}
					<S.SpanText>{urlParams?.cellLocation}</S.SpanText>
					{cellLocation(urlParams)}
				</S.TextMain>
				<S.TextMain>
					{dataText.DAYCELL}
					<S.SpanText>{urlParams?.dayCell}</S.SpanText>
					{dayCell(urlParams)}
				</S.TextMain>
				<S.TextMain>
					{dataText.COMMUNION}
					<S.SpanText>{urlParams?.communion}</S.SpanText>
					{communion(urlParams)}
				</S.TextMain>
				<S.TextMain>
					{dataText.LEADERARRIVED}
					<S.SpanText>{urlParams?.leaderArrived}</S.SpanText>
					{leaderArrived(urlParams)}
				</S.TextMain>
				<S.TextMain>
					{dataText.SHEPERDNAME}
					<S.SpanText>{urlParams?.shepherdName}</S.SpanText>
					{shepherdName(urlParams)}
				</S.TextMain>
				<S.TextMain>
					{dataText.DISCIPLERNAME}
					<S.SpanText>{urlParams?.disciplerName} </S.SpanText>
					{disciplerName(urlParams)}
				</S.TextMain>
				<S.TextMain>
					{dataText.HOWMANYMEMBERS}
					<S.SpanText>{urlParams?.howManyMembers}</S.SpanText>
					{howManyMembers(urlParams)}
				</S.TextMain>
			</S.ListQuestions>
			<Footer />
		</>
	)
}