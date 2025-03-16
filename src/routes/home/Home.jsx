import axios from 'axios'
import { useEffect, useState } from 'react'
import Movie from '../../components/movie/Movie'
import styles from './Home.module.css'
import Navbar from '../../components/navbar/Navbar'
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination,Navigation,A11y } from 'swiper/modules'

function Home() {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const key = '24341c1e87d5ddd2030f25d02fbac2ea'
  let year = new Date().getFullYear()
  let month = ((new Date().getMonth())+1).toString().padStart(2,'0')
  let date = ((new Date().getDate())-1).toString().padStart(2,'0')
  let today = year+month+date

  useEffect(()=>{
    fetchMoviesData()
  },[])

  async function fetchMoviesData() {
    let response = (await axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${today}`)).data.boxOfficeResult.dailyBoxOfficeList
    console.log(response);
    setLoading(false)
  }
  
  return (
    <div className={styles.home}>
      {
        loading ?
          <div className={styles.loading_container}><img className={styles.loading} src="../../loading1.gif" alt="로딩이미지" /></div>
        :
          <>
            <Navbar/>
              <h1>현재 상영중인 영화</h1>
              <div className={styles.swiper_container}>
                <Swiper
                  modules={[Navigation, Pagination, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation={{
                    nextEl: `${styles.swiperButtonNext}`,
                    prevEl: `${styles.swiperButtonPrev}`,
                  }}
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  loop={true}
                >
                  <SwiperSlide className={`swiper-slide ${styles.swiper_slide}`}><img className={styles.swiper_img} src="https://image.tving.com/ntgs/operation/banner/2025/03/14/1741915377_1.jpg/dims/resize/F_webp,1920" alt="" /></SwiperSlide>
                  <SwiperSlide className={`swiper-slide ${styles.swiper_slide}`}><img className={styles.swiper_img} src="https://image.tving.com/ntgs/operation/banner/2025/03/14/1741915495_1.jpg/dims/resize/F_webp,1920" alt="" /></SwiperSlide>
                  <SwiperSlide className={`swiper-slide ${styles.swiper_slide}`}><img className={styles.swiper_img} src="https://image.tving.com/ntgs/operation/banner/2025/03/08/1741396216_1.jpg/dims/resize/F_webp,1920" alt="" /></SwiperSlide>
                  <SwiperSlide className={`swiper-slide ${styles.swiper_slide}`}><img className={styles.swiper_img} src="https://image.tving.com/ntgs/operation/banner/2025/03/13/1741848425_1.jpg/dims/resize/F_webp,1920" alt="" /></SwiperSlide>
                </Swiper>
                
              </div>
            <div className={styles.movies_container}>
              {movies.map((movie)=>(
                <Movie 
                  key={movie.movieCd} 
                  id={movie.movieCd}
                  title={movie.movieNm} 
                  openDate={movie.openDt} 
                  status={movie.prdtStatNm} 
                  genres={movie.repGenreNm}
                  nation={movie.repNationNm}
                />
              ))
              }
            </div>
          </>
      }
    </div>
  )
}

export default Home