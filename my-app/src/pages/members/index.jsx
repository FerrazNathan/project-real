import React, { useState, useEffect } from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import BannerWords from '../../components/BannerWords'
import { dataText } from '../../common/constants/dataText'


export default function Members() {

	const [member, setMember] = useState()

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setMember(localStorage.getItem('member'))
		}
	}, [])

	return (
		<>
			<Header />
			<S.ContentBanner>
				<S.Banner>
					<Banner img='https://i0.wp.com/iamanovercomer.org/cotestluc/wp-content/uploads/2014/01/cell_groups.jpg?w=840' />
				</S.Banner>
			</S.ContentBanner>
			<S.Container>
				{member ? (
					<S.BoxText>
						<BannerWords title={dataText.MEMBER} text={dataText.VERYIMPORTANT}/>						
					</S.BoxText>
				) : (
					<S.BoxText>
						<BannerWords title={dataText.VISITOR} text={dataText.VERYIMPORTANT}/>	
					</S.BoxText>
				)
				}
			</S.Container>
			<Footer />
		</>
	)
}