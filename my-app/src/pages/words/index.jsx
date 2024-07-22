import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import CardVideo from '../../components/Card'
import { wordMovies } from '../../mock'
import * as S from './styles'
import BannerWords from '../../components/BannerWords'

export default function Words() {
	return (
		<div>
			<Header />
			<S.Banner>
				<Banner img='https://i.ytimg.com/vi/JzvI1Utww3U/maxresdefault.jpg' alt='Banner da página'/>
			</S.Banner>
			<BannerWords title='Palavras poderosas dos nossos pastores' />
			<S.Video>
				{wordMovies.map((item, index) => {
					return (
						<CardVideo text={item.text} video={item.video} key={index} />
					)
				})}
			</S.Video>
			<Footer />
		</div>
	)
}