import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import BannerWords from '../../components/BannerWords'
import CardVideo from '../../components/Card'
import {testimoniesMovies} from '../../mock'
import * as S from './styles'

export default function SectionTestimonies() {
	return (
		<S.ContainerMain>
			<Header />
			<S.Banner>
				<Banner img='./testemunho.jpg' alt='Banner da página'/>
			</S.Banner>
			<BannerWords title='Testemunhos poderosos que vão impactar a sua vida' />
			<S.Video>
				{testimoniesMovies.map((item) => {
					return (
						<CardVideo text={item.text} video={item.video} key={item} />
					)
				})}
			</S.Video>
			<Footer />
		</S.ContainerMain>
	)
}