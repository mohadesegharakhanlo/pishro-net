import React, { useState } from 'react'
import { Octokit} from 'octokit'
import RepositoryListCard from './RepositoryListCard'
import UserInformation from './UserInformation'
import RepositoryListIterate from './RepositoryListIterate'
import moment from "moment";
import { repoListT } from '../../../../Constant/Type'

const RepositoryList = async({params}:any) => {
  const octokit = new Octokit({})
  let repoList:repoListT[] = [] 

  await octokit.request("GET /users/{username}/repos",{
      username:params
  }).then((res) => {
    if(res?.data?.length > 0){
      res?.data?.map((item) => {
        repoList.push({
          id:item?.id,
          name:item?.name,
          forksCount:item?.forks_count ? item?.forks_count : 0,
          lastUpdate:moment(item?.updated_at).utc().format('YYYY-MM-DD'),
          star:item?.stargazers_count ? item?.stargazers_count : 0
        })
      })
    }
    
  }).catch((error) => {
    console.log("error" , error)
  })
  if(repoList?.length === 0){
    return <p>username not found</p>
  }
  return (
    <div>
        <UserInformation username={params}/>
        <RepositoryListIterate data={repoList}/>
    </div>
  )
}

export default RepositoryList