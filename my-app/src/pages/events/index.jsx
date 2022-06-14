import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import CardNews from '../../components/CardNews'
import BannerWords from '../../components/BannerWords'
import { news } from '../../mock'
import * as S from './styles'

export default function Events() {

	return (
		<div>
			<Header />
			<S.Banner>
				<Banner img='https://s3-sa-east-1.amazonaws.com/inradar.media/uploads/page/None/page-88c658e3c8c307e6158ae2720417e3b5.jpg' />
			</S.Banner>
			<BannerWords title='Fique por dentro do que rola entre nós'/>
			<S.Container>
				{news.map((item) => {
					return (
						<CardNews title={item.title} text={item.description} key={item} />
					)
				})}
			</S.Container>
			<Footer />
		</div>
	)
}