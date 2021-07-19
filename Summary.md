# Summary

```graphql
query {
  movies {
    id
    title
    rating
    medium_cover_image
  }
}
```

기본적으로 이 query를 Axios, fetch와 함께 POST request로 보내야 한다.  
내가 원하는 정보와 함께

GraphQL Yoga가 바로 쓸 수 있게 준비를 다 해둔 Server이고,
Apollo/client가 바로 쓸 수 있게 준비를 다 해둔 Client이다.
