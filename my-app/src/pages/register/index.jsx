import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Register from '../../components/Register'
import * as S from './styles'
export default function Contacts() {
	return (
		<div>
			<Header />
			<S.Banner>
				<Banner img='./members.jpeg' />
			</S.Banner>
			<Register />
			<Footer />
		</div>
	)
}