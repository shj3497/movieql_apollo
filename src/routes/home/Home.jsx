import React from 'react'
import { gql, useQuery } from '@apollo/client'
import styles from './Home.module.css'
import Movie from '../../components/movie/Movie'


const GET_MOVIES = gql`
  query{
    movies{
      id
      medium_cover_image
    }
  }
`

const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>MovieQL Apollo</h2>
        <h3>I Love GraphQL</h3>
      </div>
      {
        loading && <div className={styles.loading}><p>Loading...</p></div>
      }
      <div className={styles.movieBox}>
        {
          !loading && data.movies && data.movies.map(movie => <Movie key={movie.id} id={movie.id}  />)
        }
      </div>
    </div>
  )
}

export default Home
