import React, { useState } from 'react'
import Bannerwords from '../BannerWords'
import * as S from './styles'

export default function Quiz() {

	//states das respostas
	const [leader, setLeader] = useState()
	const [birthDateCell, setBirthDateCell] = useState()
	const [firstCellNumber, setFirstCellNumber] = useState()
	const [cellLocation, setCellLocation] = useState()
	const [dayCell, setDayCell] = useState()
	const [leaderArrived, setLeaderArrived] = useState()
	const [shepherdName, setShepherdName] = useState()
	const [communion, setCommunion] = useState()
	const [disciplerName, setDisciplerName] = useState()
	const [howManyMembers, setHowManyMembers] = useState()


	//state para saber qual a resposta vc está
	const [answer, setAnswer] = useState(0)

	//state para saber em que nível do quiz está
	const [position, setPosition] = useState(0)

	//variáveis com as respostas, dessa forma devolve um true
	const questionOne = leader === 'felipe'
	const questionTwo = birthDateCell === '2012'
	const questionThree = firstCellNumber === '08'
	const questionFour = cellLocation === 'cacula'
	const questionFive = dayCell === 'sabado'
	const questionSix = communion === 'salgados'
	const questionSeven = leaderArrived === '2009'
	const questionEight = shepherdName === 'regis'
	const questionNine = disciplerName === 'elaine'
	const questionTen = howManyMembers === '12'

	//função para setar o nível da pergunta, e resposta que vc está
	const results = (level) => {
		setPosition(position + 1)
		if (level) {
			setAnswer(answer + 1)
		}
	}

	// switch case com a conclusão final do quiz
	// const conclusion = () => {
	// 	switch (answer) {
	// 		case 0: return 'Infelizmente você não acertou nenhuma questão'
	// 		case 1: return 'Que pena, Você acertou apenas 1 questão'
	// 		case 2: return 'Que pena, Você acertou apenas 2 questões'
	// 		case 3: return 'Que pena, Você acertou apenas 3 questões'
	// 		case 4: return 'Interessante, Você acertou 4 questões'
	// 		case 5: return 'Interessante, Você acertou 5 questões'
	// 		case 6: return 'Legal, Você acertou 6 questões'
	// 		case 7: return 'Você conhece bem a célula, acertou 7 questões'
	// 		case 8: return 'Parabéns Você conhece muito bem a célula, acertou 8 questões'
	// 		case 9: return 'Parabéns, Você foi quase perfeito, acertou 9 questões'
	// 		case 10: return 'Parabéns Você conhece tudo sobre a nossa célula, acertou todas as questões'
	// 		default: return 'Você não conseguiu responder as perguntas'
	// 	}
	// }

	return (
		<>
			<Bannerwords title='Teste seu conhecimento sobre a célula'/>
			<S.Container>
				{/* renderização condicional que mostra em qual etapa do quiz vc está */}
				{position === 0 &&
					<S.ContentQuestion>
						<h2>Responda a Questão N°1</h2>
						<p>Quem é o Líder da célula?</p>
						{/* onChange para pegar o valor digitado */}
						<S.Select onChange={(event) => { setLeader(event.target.value) }}>
							<option>Selecione</option>
							<option value='felipe'>Felipe</option>
							<option value='nathan'>Nathan</option>
							<option value='prisciane'>Prisciane</option>
							<option value='vitao'>Vitão</option>
						</S.Select>
						{/* onClick para avançar para a próxima questão */}
						<button onClick={() => results(questionOne)}>Próxima</button>
					</S.ContentQuestion>
				}
				{position === 1 &&
					<S.ContentQuestion>
						<h2>Responda a Questão n°2</h2>
						<p>Em que ano nasceu essa célula?</p>
						<S.Select onChange={(event) => { setBirthDateCell(event.target.value) }} >
							<option>Selecione</option>
							<option value='2009'>2009</option>
							<option value='2010'>2010</option>
							<option value='2011'>2011</option>
							<option value='2012'>2012</option>
						</S.Select>
						<button onClick={() => results(questionTwo)}>Próxima</button>
					</S.ContentQuestion>
				}
				{position === 2 &&
					<S.ContentQuestion>
						<h2>Responda a Questão n°3</h2>
						<p>Qual o número da nossa primeira célula?</p>
						<S.Select onChange={(event) => { setFirstCellNumber(event.target.value) }}>
							<option>Selecione</option>
							<option value='72'>72</option>
							<option value='30'>30</option>
							<option value='08'>08</option>
							<option value='29'>29</option>
						</S.Select>
						<button onClick={() => results(questionThree)}>Próxima</button>
					</S.ContentQuestion>
				}
				{position === 3 &&
					<S.ContentQuestion>
						<h2>Responda a Questão n°4</h2>
						<p>Onde normalmente fazemos a reunião da célula?</p>
						<S.Select onChange={(event) => { setCellLocation(event.target.value) }}>
							<option>Selecione</option>
							<option value='santa luzia'>Santa Luzia</option>
							<option value='cacula'>Caçula</option>
							<option value='igreja'>Igreja</option>
							<option value='ouro fino'>Ouro Fino</option>
						</S.Select>
						<button onClick={() => results(questionFour)}>Próxima</button>
					</S.ContentQuestion>
				}
				{position === 4 &&
					<S.ContentQuestion>
						<h2>Responda a Questão n°5</h2>
						<p>Qual é o dia que normalmente fazemos a reunião da célula?</p>
						<S.Select onChange={(event) => { setDayCell(event.target.value) }}>
							<option>Selecione</option>
							<option value='domingo'>Domingo</option>
							<option value='sexta'>Sexta-feira</option>
							<option value='sabado'>Sábado</option>
							<option value='quarta'>Quarta-feira</option>
						</S.Select>
						<button onClick={() => results(questionFive)}>Próxima</button>
					</S.ContentQuestion>
				}
				{position === 5 &&
					<S.ContentQuestion>
						<h2>Responda a Questão n°6</h2>
						<p>Qual é a comunhão que mais fazemos?</p>
						<S.Select onChange={(event) => { setCommunion(event.target.value) }}>
							<option>Selecione</option>
							<option value='salgados'>Salgados</option>
							<option value='cachorro'>Cachorro Quente</option>
							<option value='caldo'>Caldo</option>
							<option value='pizza'>Pizza</option>
						</S.Select>
						<button onClick={() => results(questionSix)}>Próxima</button>
					</S.ContentQuestion>
				}
				{position === 6 &&
					<S.ContentQuestion>
						<h2>Responda a Questão n°7</h2>
						<p>Em que ano o nosso líder chegou na igreja?</p>
						<S.Select onChange={(event) => { setLeaderArrived(event.target.value) }}>
							<option>Selecione</option>
							<option value='2012'>2012</option>
							<option value='2011'>2011</option>
							<option value='2010'>2010</option>
							<option value='2009'>2009</option>
						</S.Select>
						<button onClick={() => results(questionSeven)}>Próxima</button>
					</S.ContentQuestion>
				}
				{position === 7 &&
					<S.ContentQuestion>
						<h2>Responda a Questão n°8</h2>
						<p>Qual é o nome do nosso pastor de jovens?</p>
						<S.Select onChange={(event) => { setShepherdName(event.target.value) }} >
							<option>Selecione</option>
							<option value='lincon'>Lincon</option>
							<option value='manoel'>Manoel</option>
							<option value='regis'>Régis</option>
							<option value='gilberto'>Gilberto</option>
						</S.Select>
						<button onClick={() => results(questionEight)}>Próxima</button>
					</S.ContentQuestion>
				}
				{position === 8 &&
					<S.ContentQuestion>
						<h2>Responda a Questão n°9</h2>
						<label>Qual é o nome do(a) nosso(a) discipulador(a)?</label>
						<S.Select onChange={(event) => { setDisciplerName(event.target.value) }}>
							<option>Selecione</option>
							<option value="elaine">Elaine</option>
							<option value='matheus'>Matheus</option>
							<option value='silas'>Silas</option>
							<option value='felipe'>Felipe</option>
						</S.Select>
						<button onClick={() => results(questionNine)}>Próxima</button>
					</S.ContentQuestion>
				}
				{position === 9 &&
					<S.ContentQuestion>
						<h2>Responda a Questão n°10</h2>
						<p>Quantos membros da célula são frequentes nos cultos?</p>
						<S.Select onChange={(event) => { setHowManyMembers(event.target.value) }}>
							<option>Selecione</option>
							<option value='10'>10</option>
							<option value='11'>11</option>
							<option value='12'>12</option>
							<option value='13'>13</option>
						</S.Select>
						<button onClick={() => results(questionTen)}>Concluir</button>
					</S.ContentQuestion>
				}
				{/* renderização condicional para saber a sua avaliação do quiz */}
				{position === 10 &&
					<button onClick={() => window.location.href = `/results?leader=${leader}&birthDateCell=${birthDateCell}&firstCellNumber=${firstCellNumber}&cellLocation=${cellLocation}&dayCell=${dayCell}&leaderArrived=${leaderArrived}&shepherdName=${shepherdName}&communion=${communion}&disciplerName=${disciplerName}&howManyMembers=${howManyMembers}`}>Veja o Resultado do Quiz</button>
				}
				{/* <h2>{conclusion()}</h2> */}
			</S.Container>
		</>

	)
}
