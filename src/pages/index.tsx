import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<section className='bg-gray-900 text-white'>
			<div className='mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center'>
				<div className='mx-auto max-w-3xl flex flex-col items-center text-center '>
					<Image className='mb-4' src='/miami-music-logo-drk.png' width={300} height={300} alt='miami-music-logo' />

					<p className='mx-auto mt-4 max-w-xl sm:text-xl/relaxed'>
						Grupo Miami Music is a dynamic Latin band that will get you moving with their electrifying blend of salsa,
						merengue, Spanish rock, and more.  
					</p>

					<div className='mt-8 flex flex-wrap justify-center gap-4'>
						<a
							className='block w-full rounded border border-teal-500 bg-pink-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto'
							href='mailto:grupomiamimusic@hotmail.com'>
							Email
						</a>

						<a
							className='block w-full rounded border border-teal-500 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto'
							href='tel:7864064400'>
							Call
						</a>
					</div>
					<h1 className='mt-5 bg-gradient-to-r from-teal-400 to-pink-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl'>
						Web Coming Soon!
					</h1>
				</div>
			</div>
		</section>
	)
}
