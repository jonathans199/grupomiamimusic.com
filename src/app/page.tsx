'use client'

import type { NextPage } from 'next'
// import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import Head from 'next/head'
import styles from './home.module.scss'

import VideoBackground from './_components/homeComponents/VideoBk'
// import Link from 'next/link'

// import { PricingTechpalooza } from './_components/homeComponents/PricingTechpalooza'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Grupo Miami Music</title>
				<meta name='description' content='Grupo Miami Music' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<VideoBackground />
			<section id='services' className={`${styles['maintaining']} bg-cover bg-fixed bg-center`}>
				<div className='md:mr-24 lg:col-end-1 lg:w-full lg:max-w-lg'>
					<h2 className=' text-4xl'>Mas de 8 años en USA</h2>
					{/* <h2 className="text-white-900 text-3xl font-bold tracking-tight sm:text-4xl">International Service Center</h2> */}
					<p className='mt-6 text-xl leading-8 text-zinc-100'>
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

			{/* <div className='bg-white'>
				<div className='relative isolate overflow-hidden bg-gradient-to-b '>
					<div className='mx-auto max-w-7xl items-center pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40'>
						<div className='px-6 lg:px-0 lg:pt-4'>
							<div className='mx-auto max-w-2xl'>
								<div className='max-w-lg'>
									<h1 className='mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
										Don&lsquo;t on the best tech event of the year!
									</h1>
									<div className='mt-10 flex items-center gap-x-6'>
										<a href='/brands' className='text-sm font-semibold leading-6 text-gray-900'>
											Find out more <span aria-hidden='true'>→</span>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className='mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen'>
							<div className='shadow-lg md:rounded-3xl'>
								<div className=' [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]'>
									<div className='h-56 sm:h-64 xl:h-80 2xl:h-96'></div>
								</div>
							</div>
						</div>
					</div>
					<div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32' />
				</div>
			</div> */}

			{/* <section id='family' className={styles['family']}>
				<div className='py-2 sm:py-32'>
					<div className='mx-auto max-w-7xl px-6 lg:px-8'>
						<PricingTechpalooza />
					</div>
				</div>
			</section> */}

			{/* <section id='contact' className='bg-icp-dark md:flex'>
				<div className='flex-col justify-between px-8 py-12 md:w-1/2 md:px-20 md:py-28'>
					<h2 className='mb-5 text-xl md:text-4xl'>Contactanos</h2>
					<div className='flex w-full items-center'>
						<img className='w-10' src='/img/clock.svg' alt='' />
						<h2 className='ml-5 md:text-2xl'>(786) 406-4400</h2>
					</div>
					<Link href='/contact'>
						<button
							type='button'
							className='mt-12 rounded-md bg-pink-500 py-2.5 font-semibold text-white shadow-sm hover:bg-slate-500 md:w-1/3'>
							Get Directions
						</button>
					</Link>
				</div>
			</section> */}
			{/* <AboutUsSection /> */}
		</>
	)
}

export default Home
