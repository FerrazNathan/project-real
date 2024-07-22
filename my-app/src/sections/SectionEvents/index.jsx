import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import CardNews from '../../components/CardNews'
import BannerWords from '../../components/BannerWords'
import { news } from '../../mock'
import * as S from './styles'

export default function SectionEvents() {
	return (
		<div>
			<Header />
			<S.Banner>
				<Banner img="./bg_conv.png" alt='Banner da convenção'/>
			</S.Banner>
			<BannerWords title="Fique por dentro do que rola entre nós" />
			<S.Container>
				{news.map((item) => {
					return (
						<CardNews
							title={item.title}
							text={item.description}
							src={item.src}
							key={item}
							date={item.date}
							local={item.local}
							hour={item.hour}
						/>
					)
				})}
			</S.Container>
			<Footer />
		</div>
	)
}
