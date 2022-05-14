import React, { useState, useEffect } from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import BannerWords from '../../components/BannerWords'
import { dataText } from '../../common/constants/dataText'
import CardMember from '../../components/CardMember'


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
			<S.Banner>
				<Banner img='./members.jpeg' />
			</S.Banner>
			{member ? (
				<BannerWords title={dataText.MEMBER} text={dataText.VERYIMPORTANT} />
			) : (
				<BannerWords title={dataText.VISITOR} text={dataText.VERYIMPORTANT} />
			)}
			<CardMember />
			<Footer />
		</>
	)
}