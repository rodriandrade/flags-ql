// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { gql } from "@apollo/client";
import client from "../apollo-client"

export default async (req, res) => {
  if(req.method === "GET"){
    const continentsData = await client.query({
      query: gql`
        query{
          continents{
            name
            slug
          }
        }
      `,
    });
    res.send(continentsData.data)
  }
}
