import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import Contact from '../../components/Contact'
import * as S from './styles'

export default function Contacts() {
	return (
		<div>
			<Header />
			<S.Banner>
				<Banner img='https://tm.ibxk.com.br/2021/10/04/04125619753191.jpg?ims=1120x420' />
			</S.Banner>
			<Contact />
			<Footer />
		</div>
	)
}