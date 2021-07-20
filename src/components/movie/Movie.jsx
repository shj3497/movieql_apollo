import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Movie.module.css'
import { Button } from '@material-ui/core'

const Movie = ({id, bgImg, isLiked}) => {
  
  return (
    <div className={styles.container}>
      <Link to={`/${id}`}>
        <div className={styles.imgContainer}>
          <img src={bgImg} alt="" />
        </div>
      </Link>
      {/* <Button className={styles.button} variant="contained">{isLiked ? "Unlike" : "Like"}</Button> */}
    </div>
  )
}

export default Movie
