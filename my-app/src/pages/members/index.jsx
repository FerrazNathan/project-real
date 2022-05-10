import React, { useState, useEffect } from 'react'
import * as S from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'


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
			<S.Container>
				{member ? (
					<h1>Obrigado por ser membro da célula</h1>
				) : (
					<h1>Venha fazer parte da nossa célula</h1>
				)
				}
				<Banner img='https://i0.wp.com/iamanovercomer.org/cotestluc/wp-content/uploads/2014/01/cell_groups.jpg?w=840' />
			</S.Container>
			<Footer />
		</>
	)
}