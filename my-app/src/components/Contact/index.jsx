import React from 'react'
import BannerWords from '../BannerWords'
import {BsWhatsapp} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import * as S from './styles'

export default function index() {
	return (
		<>
			<BannerWords title='Venha fazer parte da nossa célula' text='Entre em contato conosco' />
			<S.Container>
				<S.ContentIcon>
					<a href='https://www.facebook.com/nathan.ferraz.58'>
						<BsFacebook style={{width: '5%', height: '5%'}}/>
					</a>
				</S.ContentIcon>
				<S.ContentIcon>
					<BsInstagram style={{width: '5%', height: '5%'}}/>
				</S.ContentIcon>
				<S.ContentIcon>
					<BsWhatsapp style={{width: '5%', height: '5%'}}/>
				</S.ContentIcon>
			</S.Container>
		</>
	)
}
