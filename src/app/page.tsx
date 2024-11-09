'use client'

import type { NextPage } from 'next'
// import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import Head from 'next/head'
import styles from './home.module.scss'

import VideoBackground from './_components/homeComponents/VideoBk'

const Home: NextPage = () => {
	return (
		<div id='about'>
			<Head>
				<title>Grupo Miami Music</title>
				<meta name='description' content='Grupo Miami Music' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<VideoBackground />
			<section className={`${styles['maintaining']} bg-cover bg-fixed bg-center`}>
				<div className='mx-6 md:mr-24 lg:col-end-1 lg:w-full lg:max-w-lg'>
					<h2 className='text-xl sm:text-4xl'>Mas de 8 años en USA</h2>
					{/* <h2 className="text-white-900 text-3xl font-bold tracking-tight sm:text-4xl">International Service Center</h2> */}
					<p className='mt-6 sm:text-xl leading-8 text-zinc-100'>
						🏆Únete a nosotros para disfrutar del Grupo Miami Music, que toca una vibrante mezcla de música tropical.
						Desde salsa y merengue hasta bachata, cumbia y rock en español, esta banda trae la energía y el ritmo de los
						géneros latinos más populares. No se pierda la oportunidad de bailar y disfrutar de una noche llena de
						música y diversión. 🌴
					</p>

					<div className='mt-10 flex'>
						<a
							href='tel:7864064400'
							className='rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
							Llamanos (786) 406-4400 <span aria-hidden='true'>→</span>
						</a>
					</div>
				</div>
			</section>

			<div className='bg-white'>
				<div className='relative isolate overflow-hidden bg-gradient-to-b '>
					<div className='mx-auto max-w-7xl items-center pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40'>
						<div className='px-6 lg:px-0 lg:pt-4'>
							<div className='mx-auto max-w-2xl'>
								<div className='max-w-lg'>
									<h1 className='mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
										¡Experimenta el ritmo de Miami con nosotros!
									</h1>
									<div className='mt-10 flex items-center gap-x-6'>
										{/* <a href='/brands' className='text-sm font-semibold leading-6 text-gray-900'>
											Find out more <span aria-hidden='true'>→</span>
										</a> */}
									</div>
								</div>
							</div>
						</div>

						{/* <div className='mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen'>
							<div className='shadow-lg md:rounded-3xl'>
								<div className=' [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]'>
									<div className='h-56 sm:h-64 xl:h-80 2xl:h-96'></div>
								</div>
							</div>
						</div> */}
					</div>
					<div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32' />
				</div>
			</div>
		</div>
	)
}

export default Home
