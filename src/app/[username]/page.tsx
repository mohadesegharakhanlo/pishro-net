import RepositoryList from '@/Ui/Container/RepositoryList/RepositoryList'
import { GetServerSideProps } from 'next'
import { Octokit} from 'octokit'
import React, { FC, useState } from 'react'

const  page= async({params}:any) => {

  return (
   <RepositoryList params={params?.username}/>
  )
}

export default page;

