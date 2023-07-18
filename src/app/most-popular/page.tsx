import React from 'react'
import { Octokit} from 'octokit'
import { repoListT } from '../../../Constant/Type'
import MostPopularRepo from '@/Ui/Container/MostPopularRepo/MostPopularRepo'

const page = async () => {
  const octokit = new Octokit({})
  const popularRepo : repoListT[] = []
  await octokit.request("GET /search/repositories",{
    q:"stars:>1",
    sort:"stars",
    per_page:10,
  }).then((res) => {
      res?.data?.items?.map((item) => {
        popularRepo.push({
          name:item?.name,
          id:item?.id,
          forksCount:item?.forks_count,
          star:item?.stargazers_count,
          lastUpdate:item?.updated_at
        })
      })
  }).catch((error) => console.log("error" , error))
  return (
    <div>
      <MostPopularRepo data={popularRepo}/>
    </div>
  )
}

export default page