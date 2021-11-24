import '../styles/globals.css'

// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
 
// } from "@apollo/client";

// const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql',
//   cache: new InMemoryCache(),
//   credentials: 'include'
// });

// const client = createClient({
//   url: 'http://localhost:4000/graphql',
  
//   fetchOptions:{
//   origin: 'http://localhost:3000',
//   credentials:'include'
// }
// });

function MyApp({ Component, pageProps }) {
  return (
 <Component {...pageProps} />

  )
}

export default MyApp
