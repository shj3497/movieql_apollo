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

Apollo는 자체적으로 cache를 가지고 있다.
Apollo가 뭔가를 얻으면 그것을 저장해 둔다. >> 상태관리가 필요가 없을 수도...?
