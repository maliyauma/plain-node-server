//types query/mutation/subscription
const { gql } = require("apollo-server-express");
const typeDefs = gql`

type Post{
id:Int
title:String
date:String


}

type Query {
  hello: String
  author:String
  defaultPost:String
  defaultUser:String
  }

  type Mutation{
    createPost(title:String,date:String):Post
  }
`;

module.exports = { typeDefs };
