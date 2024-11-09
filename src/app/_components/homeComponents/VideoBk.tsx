const VideoBackground = () => {
	return (
		<div className='relative sm:h-screen h-[700px] w-full overflow-hidden'>
			<iframe
				className='js-player sm:-mt-12 -mt-40'
				width='100%'
				height='100%'
				src='https://www.youtube.com/embed/QlxqecjivdE?autoplay=1&mute=1&loop=1&playlist=QlxqecjivdE&modestbranding=1&showinfo=0&controls=0&iv_load_policy=3&rel=0&fs=0'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media;'></iframe>
			<div className='absolute left-0 top-0 z-10 h-full w-full bg-black opacity-70' />
			<div className='absolute left-0 top-0 z-20 flex h-screen w-full flex-col justify-center sm:pt-96'>
				<div className=' flex w-auto items-center justify-between px-2 md:px-28  '>
					<div className=''>
						<img
							className='sm:h-48 sm:block hidden w-auto'
							src='/img/logos/miami-music-logo.svg'
							alt='Grupo Miami Music'
						/>
						<h1 className='text-2xl font-bold tracking-tight text-icp-orange sm:text-6xl '>Grupo Miami Music</h1>
						<h2 className='sm:mt-6 text-xl leading-8 text-gray-300 md:text-4xl'>GOZADERA TOTAL!</h2>
						<div className='mt-10 flex items-center gap-x-6 md:justify-center lg:justify-start'>
							<a
								href='tel:7864064400'
								className='rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
								Llamanos (786) 406-4400 <span aria-hidden='true'>→</span>
							</a>
						</div>
					</div>

					{/* <a className='mt-60' href='#about'>
						<img src='/img/home/dropdownChevron.png' alt='' />
					</a> */}
				</div>
			</div>
		</div>
	)
}

export default VideoBackground
