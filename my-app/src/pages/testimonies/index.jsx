import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import * as S from './styles'

export default function Testimonies() {
	return (
		<div>
			<Header />
			<S.Banner>
				<Banner img='./testemunho.jpg' />
			</S.Banner>
			<Footer />
		</div>
	)
}