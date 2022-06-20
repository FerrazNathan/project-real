import React from 'react'
import BannerWords from '../BannerWords'
import { BsWhatsapp } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import * as S from './styles'

export default function index() {
	return (
		<>
			<BannerWords
				title="Venha fazer parte da nossa célula"
				text="Entre em contato conosco"
			/>
			<S.Container>
				<S.ContentIcon>
					<a href="https://www.facebook.com/nathan.ferraz.58" target="_blank" rel="noreferrer">
						<BsFacebook style={{ width: '5%', height: '5%', color: '#023bfe' }} />
					</a>
				</S.ContentIcon>
				<S.ContentIcon>
					<a
						href="https://instagram.com/feoulip?igshid=YmMyMTA2M2Y="
						target="_blank" rel="noreferrer"
					>
						<BsInstagram style={{ width: '5%', height: '5%' , color: '#cc1972'}} />
					</a>
				</S.ContentIcon>
				<S.ContentIcon>
					<a
						href="https://web.whatsapp.com/send?phone=+5511910282739"
						target="_blank" rel="noreferrer"
					>
						<BsWhatsapp style={{ width: '5%', height: '5%' , color: '#04c942'}} />
					</a>
				</S.ContentIcon>
				<S.ContentIcon>
					<a
						href="https://outlook.live.com/mail/0/"
						target="_blank" rel="noreferrer"
					>
						<HiOutlineMail style={{ width: '5%', height: '5%', color: '#023bfe' }} />
					</a>
				</S.ContentIcon>
			</S.Container>
		</>
	)
}
