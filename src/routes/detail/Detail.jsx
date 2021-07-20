import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import styles from './Detail.module.css'

const GET_MOVIE = gql`
  query getMovie($id: Int!){
    movie(id: $id){
      title
      medium_cover_image
      language
      description_intro
      rating
    }
    suggestions(id: $id){
      id
      title
      medium_cover_image
    }
  }
`

const Detail = (props) => {
  const {id} = useParams();
  const {loading, error, data} = useQuery(GET_MOVIE, {
    // parseInt(id) 인 이유가 현재 useParams()로 받아온 id가 string이라서 Int로 형변환 해주어야한다.
    variables: {id: parseInt(id)}
  });

  console.log(data);
  
  return(
    <div className={styles.container}>
      {
        loading ? 
        ( 
          <div className={styles.movieContainer}><h1>Loading...</h1></div> 
        )
        :
        (
          <>
            <div className={styles.movieContainer}>
              <h1>{data.movie.title}</h1>
              <h4>{data.movie.language} • {data.movie.rating}</h4>
              <p>{data.movie.description_intro}</p>
            </div>
            <div className={styles.movieImgContainer}>
              <img src={data.movie.medium_cover_image} alt="" />
            </div>
          </>
        )
      }
    </div>
  )
}

export default Detail;