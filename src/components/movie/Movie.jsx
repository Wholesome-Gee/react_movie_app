import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Movie.module.css'
import axios from 'axios'
import { useEffect } from 'react'

function Movie({id,title,summary,genres}) {
  const state = { id: id }
  return (
    <div className={styles.movie_container} key={id}>
      <img className={styles.movie_img} src='../../poster.png' alt="cover_image" />
      <div>
        <Link to={ `/movie/${id}`}>
          <h2>{title}</h2>
        </Link>
        <p>{summary}</p>
        <p>{genres}</p>
      </div>
      
    </div>
  )
}

Movie.propTypes = {
  id:PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie