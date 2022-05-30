import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BannerWords from '../../components/BannerWords'
// import * as S from './styles'
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
	howManyMembers
} from '../../utils'

export default function OurCell() {

	//função da query string
	const params = new URLSearchParams(window.location.search)
	let urlParams = undefined
	params.forEach((value, key) => {
		urlParams = Object.assign({}, urlParams, {

			[key]: value.toString()
		})
	})

	console.log('o que chega aqui =>', urlParams)



	return (
		<div>
			<Header />
			<BannerWords title='Essas foram as suas respostas' />
			<h1>Quem é o líder da célula? {urlParams.leader} {leader()}</h1>
			<h1>Em que ano nasceu essa célula? {urlParams.birthDateCell} {birthDateCell()}</h1>
			<h1>Qual o número da nossa primeira célula? {urlParams.firstCellNumber} {firstCellNumber()}</h1>
			<h1>Onde normalmente fazemos a reunião da célula? {urlParams.cellLocation} {cellLocation()}</h1>
			<h1>Qual é o dia que normalmente fazemos a reunião da célula? {urlParams.dayCell} {dayCell()}</h1>
			<h1>Qual é a comunhão que mais fazemos? {urlParams.communion} {communion()}</h1>
			<h1>Em que ano o nosso líder chegou na igreja? {urlParams.leaderArrived} {leaderArrived()}</h1>
			<h1>Qual é o nome do nosso pastor de jovens? {urlParams.shepherdName} {shepherdName()}</h1>
			<h1>Qual é o nome do(a) nosso(a) discipulador(a)? {urlParams.disciplerName} {disciplerName()}</h1>
			<h1>Quantos membros da célula são frequentes nos cultos? {urlParams.howManyMembers} {howManyMembers()}</h1>
			<Footer />
		</div>
	)
}