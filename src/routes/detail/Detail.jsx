import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import styles from './Detail.module.css'

const GET_MOVIE = gql`
  query getMovie($id: Int!){
    movie(id: $id){
      id
      title
      medium_cover_image
      description_intro
    }
  }
`

const Detail = (props) => {
  const {id} = useParams();
  console.log(typeof(id));
  const {loading, error, data} = useQuery(GET_MOVIE, {
    // +id 인 이유가 현재 useParams()로 받아온 id가 string이라서 Int로 형변환 해주어야한다.
    variables: {id: +id}
  });

  
  return(
    <div className={styles.container}>
      {
        loading ? 
        ( <div className={styles.loading}><p>Loading...</p></div> )
        :
        (
          <div className={styles.movieContainer}>
            <h1>{data.movie.title}</h1>
          </div>
        )
      }
      
    </div>
  )
}

export default Detail;