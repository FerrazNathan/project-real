import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import * as S from './styles'
import Quiz from '../../components/Quiz'

export default function OurCell() {
	return (
		<div>
			<Header />
			<S.Banner>
				<Banner img='https://i.ytimg.com/vi/zVBcCuxFTWo/sddefault.jpg' />
			</S.Banner>
			<Quiz />
			<Footer />
		</div>
	)
}