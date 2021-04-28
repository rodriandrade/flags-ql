// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { gql } from "@apollo/client";
import client from '../../components/apollo-client'

export default async (req, res) => {
  if(req.method === "GET"){
    const { continent } = req.query;
    console.log(continent)
    const countries = await client.query({
        query: gql`
            query getCountries($name: String!){
                continent(name: $name){
                    countries{
                        name
                        flag
                        flag_info
                    }
                }
            }
        `,
        variables: {
            name: continent
          }
      });
    res.send(countries.data)
  }
}
