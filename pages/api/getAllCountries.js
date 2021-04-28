// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { gql } from "@apollo/client";
import client from '../../components/apollo-client'

export default async (req, res) => {
  if(req.method === "GET"){
    const countries = await client.query({
        query: gql`
          query{
            countries{
              name
              flag
              flag_info
            }
          }
        `,
    });
    res.send(countries.data)
  }
}
