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
	const [a, setA] = useState('')


	useEffect(() => {
		if (typeof window !== 'undefined') {
			setName(localStorage.getItem('name'))
		}
	}, [])

	useEffect(() => {
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
		setA(urlParams)
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
				text={`${name ? name : ''} ${conclusion(a?.answer)}`}
			/>
			<S.ListQuestions>
				<S.TextMain>
					{dataText.LEADER}
					<S.SpanText>{a?.leader}</S.SpanText>
					{leader(a?.leader)}
				</S.TextMain>
				<S.TextMain>
					{dataText.BIRTHDATECELL}
					<S.SpanText>{a?.birthDateCell}</S.SpanText>
					{birthDateCell(a)}
				</S.TextMain>
				<S.TextMain>
					{dataText.FIRSTCELLNUMBER}
					<S.SpanText>{a?.firstCellNumber}</S.SpanText>
					{firstCellNumber(a)}
				</S.TextMain>
				<S.TextMain>
					{dataText.CELLLOCATION}
					<S.SpanText>{a?.cellLocation}</S.SpanText>
					{cellLocation(a)}
				</S.TextMain>
				<S.TextMain>
					{dataText.DAYCELL}
					<S.SpanText>{a?.dayCell}</S.SpanText>
					{dayCell(a)}
				</S.TextMain>
				<S.TextMain>
					{dataText.COMMUNION}
					<S.SpanText>{a?.communion}</S.SpanText>
					{communion(a)}
				</S.TextMain>
				<S.TextMain>
					{dataText.LEADERARRIVED}
					<S.SpanText>{a?.leaderArrived}</S.SpanText>
					{leaderArrived(a)}
				</S.TextMain>
				<S.TextMain>
					{dataText.SHEPERDNAME}
					<S.SpanText>{a?.shepherdName}</S.SpanText>
					{shepherdName(a)}
				</S.TextMain>
				<S.TextMain>
					{dataText.DISCIPLERNAME}
					<S.SpanText> {a?.disciplerName}</S.SpanText>
					{disciplerName(a)}
				</S.TextMain>
				<S.TextMain>
					{dataText.HOWMANYMEMBERS}
					<S.SpanText>{a?.howManyMembers}</S.SpanText>
					{howManyMembers(a)}
				</S.TextMain>
			</S.ListQuestions>
			<Footer />
		</>
	)
}

// 