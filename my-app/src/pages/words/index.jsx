import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import BoxCardPageWords from '../../components/BoxCardPageWords'
import * as S from './styles'

export default function Words() {
	return (
		<div>
			<Header />
			<S.Banner>
				<Banner img='https://i.ytimg.com/vi/JzvI1Utww3U/maxresdefault.jpg' />
			</S.Banner>
			<BoxCardPageWords />			
			<Footer />
		</div>
	)
}