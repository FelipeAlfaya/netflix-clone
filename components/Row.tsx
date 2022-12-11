import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Movie } from '../typings'
import Thumbnail from './Thumbnail'

interface props {
  title: string
  // movie: Movie | DocumentData[]
  movies: Movie[]
}

function Row({ title, movies }: props) {
  return (
    <div className='h-40 space-y-0.5 md:space-y-2'>
      <h2
        className='w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition 
      duration-200 hover:text-white md:text-2xl'
      >
        {title}
      </h2>
      <div className='group relative md:-ml-2'>
        <Swiper
          spaceBetween={32}
          slidesPerView={'auto'}
          navigation
          modules={[Navigation]}
        >
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <Thumbnail key={movie.id} movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Row
