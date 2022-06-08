/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './styles.module.css'

export default function Sliders({ settings, children }) {

	return (
		<Swiper className={styles.content}
			modules=
				{[Navigation, Pagination, A11y, Autoplay]}
			{...settings}
		>
			{children}
			<div className={styles.container}>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/286252294_5141424935979015_1778577997284157820_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=-F1Lw4giZ9oAX8cYcuO&tn=-EZIded70qwQJ1_Z&_nc_ht=scontent.fgru14-1.fna&oh=00_AT_UpO8wXeyct00IiiPrHEm0GHYZt2GyuLBoRIXViyx1AA&oe=62A55AFB' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/286292849_5141425019312340_459722252498835689_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_ohc=L5L5P-sMOFUAX9LSsZY&_nc_ht=scontent.fgru14-1.fna&oh=00_AT8wfkYAl6KkJWlm1CDaaYX1OrfIugisgxD4gpGie1vNSA&oe=62A64F29' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/287121048_5141425399312302_4035512475725129892_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=vjZ3-avIgoUAX9NU4xp&tn=-EZIded70qwQJ1_Z&_nc_ht=scontent.fgru14-1.fna&oh=00_AT8i2bL5FTB53HgoY874DX53DMFucI8Trk_Dg4pVLvKQjA&oe=62A5ED5A' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/286027166_5141425485978960_289238487687813874_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_ohc=KydbtSUyOQkAX_YXiZ3&_nc_ht=scontent.fgru14-1.fna&oh=00_AT_eI8PVuA2UJiDsOQp-iTnLpOwolbzsSyyXODeI2BwSxw&oe=62A5A0FF' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/286400125_5141425575978951_8677782420924057150_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=gLeerDD-Zn4AX8FiYXB&_nc_ht=scontent.fgru14-1.fna&oh=00_AT_vKuyVwm-7bkeRcGixztpe5_2ehxACLcx5FJsZ-F1-nQ&oe=62A55AB1' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/286337964_5141425665978942_6320996492205880110_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=Mxnv4beqv4MAX9g7LzO&_nc_ht=scontent.fgru14-1.fna&oh=00_AT8Zj1Mt4Ap9b8MPoP6JNVOaQSK66LoqyXZ-5fooIkRdjw&oe=62A55AC1' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/286263106_5141425829312259_9124327572551828300_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_ohc=qzRexBrszOkAX8QSiev&_nc_ht=scontent.fgru14-1.fna&oh=00_AT8vnTuQCmwlprlU4TlYy4uL8IolSMEdl7aQzszsrjHbwg&oe=62A5BA4D' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/286438887_5141426065978902_3322491372788772373_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=c23rBIY8DAUAX82r1TR&_nc_ht=scontent.fgru14-1.fna&oh=00_AT8JPa53HcjuAnsAKjIRmSHJR7BhEg-ofP5bhmnW0-wQew&oe=62A53F61' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/286362131_5141426179312224_9035213552802737592_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=LCIYjUj3jykAX9P5Fc7&_nc_ht=scontent.fgru14-1.fna&oh=00_AT-i0DPLMUQHNO8SWQC8P9p85qp1k_yzGJB78Aiv2fID-w&oe=62A61819' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/287194054_5141426322645543_6913726057433947528_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=bk70d5ZZ-gUAX-UxdRf&_nc_ht=scontent.fgru14-1.fna&oh=00_AT-vEHmradyk1F9y1qmBnKOaQUCwYjZHIN1OaRcrnarBEw&oe=62A608A9' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/286888388_5141426445978864_5795548769025032161_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=WtZ1end16ggAX8DUf8w&_nc_ht=scontent.fgru14-1.fna&oh=00_AT89eDy_qBYT3hS4CthBbQ40q-SMEk6sKVjiLktVeHrC5w&oe=62A552B1' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/285767770_5141426525978856_7577221049764811496_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_ohc=D4Kg6G6KgcMAX-aVsKY&_nc_ht=scontent.fgru14-1.fna&oh=00_AT9sUKqHOUngKvjfC28Jft1tTRXlyh6Xa9A4vsE0As8a0w&oe=62A53AD3' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/286676984_5141426645978844_5420666032911945863_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=QpzhdKn0X4gAX9IJlTc&_nc_ht=scontent.fgru14-1.fna&oh=00_AT9jiGVpUjO02ejmYzcPH4HisYXGhbP_i1IRn3RKZe31xQ&oe=62A6CCAD' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/286932544_5141426742645501_38431519046495026_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_ohc=CxXche5NyJEAX-Z5kO6&_nc_ht=scontent.fgru14-1.fna&oh=00_AT__KXpFrthHoNoc940bqQ_YMNeG7h73BM6audp8n44g7w&oe=62A52EB0' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/286805457_5141426809312161_9157309888971275343_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=mJMY5_Ec6akAX_v2Hs7&_nc_ht=scontent.fgru14-1.fna&oh=00_AT_K21yi0mCgdWN4Ev44slNlfvGtRpjNOHuJe9Rhx-CBwQ&oe=62A68FAA' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/286684784_5141426889312153_19017037444774939_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=uKa8s1PBeeEAX8dLqNZ&_nc_ht=scontent.fgru14-1.fna&oh=00_AT9_AkP-MKVwjyDXqCfsyc9PiCYPHcCbNSr7w5g2L-kuWQ&oe=62A6E6D9' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/286218900_5141426975978811_7461107278703909064_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=K1GmbWF-5iAAX-KIlat&_nc_ht=scontent.fgru14-1.fna&oh=00_AT8ejuin_qauxwnFguuF1ZmhwCAr4f8IMRL2Nj11SaKQzA&oe=62A68292' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/286150253_5141427085978800_5363882254758025756_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=XlPCzLNJj5UAX98CCLI&_nc_ht=scontent.fgru14-1.fna&oh=00_AT8eDfv9kIPlpOHg_jFuCsJ7RVlyWYtsQdDyFpysBNv90g&oe=62A6A3E9' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/286451362_5141427332645442_7975808662974616864_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=0debeb&_nc_ohc=Hoaq6h7jKqUAX8m7Eeo&_nc_ht=scontent.fgru14-1.fna&oh=00_AT-mDXu1V7QxqpPKXM80bnLdgs0bzkFxueY8MmmevkOLRA&oe=62A51F83' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/286571707_5141427569312085_2187911020531624916_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=d34OVt1tGK0AX9cvZ_u&_nc_ht=scontent.fgru14-1.fna&oh=00_AT_wosSHY59uluDiu0ENZOm1hSlNEdRmkqwjvm-jmkOimA&oe=62A57A20' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/286206905_5141427665978742_3651663478277878763_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=0debeb&_nc_ohc=2yTem4IT25IAX81vVad&_nc_ht=scontent.fgru14-1.fna&oh=00_AT8jzEnmh47f-vicUW0OTGEnRTDGtRgFxvNkmbcaDrlkBQ&oe=62A55D52' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/286459650_5141427722645403_444561403733919990_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_ohc=e4nOB_8GcjwAX9_AQWt&_nc_ht=scontent.fgru14-1.fna&oh=00_AT82xgtTBh14cNZHBd_QJE_nnIa3BYX5jOQwbHZmwTEecA&oe=62A55041' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/287072157_5141427949312047_2793856223350240694_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=TYuWv9yNVwkAX9KD1mX&_nc_ht=scontent.fgru14-1.fna&oh=00_AT8Y_ba4p4n1jnXyVpTZF1rWDjRGeC-rNOLvJFIngCKLag&oe=62A54FB0' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/286033855_5141428035978705_5933292992777735407_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0debeb&_nc_ohc=Xx3-57rbUuEAX_xc6B2&tn=-EZIded70qwQJ1_Z&_nc_ht=scontent.fgru14-1.fna&oh=00_AT88LD516qnU1Danas8Quo3v37bv1AtgjZkWw0r4QxLKtw&oe=62A5ABFA' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/286833139_5141428112645364_2690665087356416972_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=FciLKqA3SjEAX8rwg1g&_nc_ht=scontent.fgru14-1.fna&oh=00_AT-OWabBwalOWjvWcFTN3jiT-Sn6E55HIWFubJuhLt6dvg&oe=62A6A773' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t39.30808-6/286080893_5141428309312011_1103130609049372124_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_ohc=E8xB7ycL_d4AX-ab1jc&_nc_oc=AQlv3KHWj1NRnze8Z793zTcdfmiFgdyj54xWdtLSTuS-8Ez0DcwMxeT-ME1jCym8AJA&_nc_ht=scontent.fgru14-1.fna&oh=00_AT-_rJgiKvl3Nztbkef7pHT6CXdxz5mF20bxXfUDj2ILcQ&oe=62A6B449' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t1.18169-9/11866300_905012882924883_4106678433786471236_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=n7jcqHCj8X0AX-j1sEv&_nc_ht=scontent.fgru14-1.fna&oh=00_AT_-SiopslDcW-bpZqVHqbXKgbbC7kz4JzoZ8BXz1LAhXQ&oe=62C6F6C3' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t1.18169-9/12096174_929129937179844_1644290032428898014_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=HxpXfEJQ_lkAX_02J2K&_nc_ht=scontent.fgru14-1.fna&oh=00_AT_DzKPo1YC8HH6GGMm_g4wDKvnvCNCD6RlhIpeqj-WJmA&oe=62C60CD3' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t1.18169-9/12065769_938430562916448_6383843018310961543_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=nr3EjNdUnksAX-6u8Ve&_nc_ht=scontent.fgru14-1.fna&oh=00_AT_e9maE2EIgEiVL7gVMWskJPRozK0ue5lm4DoaGKE3wAw&oe=62C7F2BC' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t1.18169-9/12004078_916792461746925_5071963090127872253_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=p1tFHYi7LecAX-q5PEI&_nc_ht=scontent.fgru14-1.fna&oh=00_AT-j03dV-e0Ch75uSmUU3-is6oDQhIKVtxrHDFmDoJxv3g&oe=62C56CDC' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t1.18169-9/74993_320514974717577_1794286064_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ba80b0&_nc_ohc=QavQEUukFO4AX9Qx_42&_nc_ht=scontent.fgru14-1.fna&oh=00_AT9HrBWBMEuFlhrQV8GZimO1UB2g86h8wCUSLEUqjRx2UA&oe=62C6EC3B' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t31.18172-8/15443018_638730899642958_6256364279827718298_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=mVJkhmyzl5AAX9S50p4&tn=-EZIded70qwQJ1_Z&_nc_ht=scontent.fgru14-1.fna&oh=00_AT_mnNV7d4ePrLbYKWXpWClyak9Vabet3qp5zzjcB8YjwA&oe=62C6DD37' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t31.18172-8/15418327_638847949631253_8518509729565253459_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=3LaMDOgoJooAX9UlTtR&_nc_ht=scontent.fgru14-1.fna&oh=00_AT-i8P2fDLdSIxL2gKLOeeBXJPvqzOojoIdQ7M3FWSns3Q&oe=62C666A9' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t31.18172-8/15403693_638847779631270_4887798572236989507_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=d2-woDjIH3wAX_ygBsL&_nc_ht=scontent.fgru14-1.fna&oh=00_AT8V1Fzn80d1KcJ8VvUIiINc4w072IFIEhHrBwZLHnIyNQ&oe=62C6920B' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t31.18172-8/11336942_10153386266554042_3607537932664410197_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=Ipg-MyOWWPkAX-Fxa9c&_nc_ht=scontent.fgru14-1.fna&oh=00_AT_lonC-CWCic7SndKLLzlvIN-aimaKjmgVtJ5b0YtGKUw&oe=62C70481' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t31.18172-8/11406502_10153386266934042_1958820645790009633_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=gWN_hdl_FaMAX_wWeX4&_nc_ht=scontent.fgru14-1.fna&oh=00_AT-Y9BlUz8uGOJ0yRB1THGnGuQayIaECDzxqfDyZhkgq0w&oe=62C593C0' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t31.18172-8/13248605_10154175474049042_2061568200775834825_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=OrT7tEdaJH4AX9Ilpm5&_nc_ht=scontent.fgru14-1.fna&oh=00_AT9ZEY69_zytNvu1L0Q_NY2iIZ8261c8120V24U4OAGuSA&oe=62C886DA' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t31.18172-8/13227482_10154175474724042_4557301608809059463_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=YHdDyNUyIzwAX9DsklC&_nc_ht=scontent.fgru14-1.fna&oh=00_AT8VwrFUDGqzh9de6HekkUdZGVkZVwWPReQa09yF6ZINow&oe=62C6E8F4' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t31.18172-8/12045559_783468231763439_5629857465663584964_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jqbnMgGRYb8AX_aDmAq&tn=-EZIded70qwQJ1_Z&_nc_ht=scontent.fgru14-1.fna&oh=00_AT9etxRfhFktv18nbpp_q7x6ChQq4C5IT7jVVWv6bJqtKg&oe=62C7952F' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t1.18169-9/11406850_631651030269536_8819600317448529893_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ba80b0&_nc_ohc=pjZrOWM9H-kAX8RNqhR&_nc_ht=scontent.fgru14-1.fna&oh=00_AT_-4goDGh9q6gd9UpPwmXKHpOsyFtcq_SD8KRdhDACf1Q&oe=62C7E8F4' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t1.18169-9/11539587_641359345965371_3441503328444008974_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Gk6YfBYfH-8AX-DwUzZ&_nc_ht=scontent.fgru14-1.fna&oh=00_AT9wHwsanu42VV5jg6oCC4rk7NLEmPJa7SszneiEsEgtwQ&oe=62C866AA' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t1.18169-9/11193426_717599821683057_5738476152724909752_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=eUasyLyn_EcAX8-Nd3O&_nc_ht=scontent.fgru14-1.fna&oh=00_AT_4qZXLj_euBxn6-SLjobcht-wV8o5pxcsprKFhvCed4w&oe=62C5BFCB' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t1.18169-9/1395307_600777236646235_137071275_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=mqDvgyarRrcAX9NmKb3&tn=-EZIded70qwQJ1_Z&_nc_ht=scontent.fgru14-1.fna&oh=00_AT_BNOscnYCMp-nJ6-vcnbiSqaKYPU-nUUpYmv6Ff91sBA&oe=62C4BC8E' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t31.18172-8/1483644_634580536643252_1057311843956184694_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ba80b0&_nc_ohc=6K0C8iJcEpwAX-5XP4D&_nc_oc=AQkjF1Ak4xD7LaiVuWOLRuIQ3tFOLsALbUkkGPXR2eJ9yfEQ2eigmP1SdGGz6OE4ogM&_nc_ht=scontent.fgru14-1.fna&oh=00_AT8iljy2A7e8oFcOHdH0iInPNq-IRvCDi33JkHupzsCtew&oe=62C73DC0' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t1.18169-9/18671158_1305508786237335_4568515094566554084_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=d9xrfDlWFv0AX-PAPjc&_nc_ht=scontent.fgru14-1.fna&oh=00_AT-12X7eIjBPrh6eRvMEiD_5ePfjwxaLwhX6vbYkK-RbvA&oe=62C51FF4' />
				</SwiperSlide>
				<SwiperSlide className={styles.single}>
					<img src='https://scontent.fgru14-1.fna.fbcdn.net/v/t1.6435-9/50095629_10156986906909042_6585708998337495040_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vAklGZUBIEwAX9xX830&tn=-EZIded70qwQJ1_Z&_nc_ht=scontent.fgru14-1.fna&oh=00_AT9GGYiLSZifzhqeYf04PV6r5ftBejzHUkBVqSnVF6vJ7Q&oe=62C69ADE' />
				</SwiperSlide>
			</div>
		</Swiper >
	)
}
