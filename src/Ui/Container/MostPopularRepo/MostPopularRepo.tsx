'use client'
import React, { FC, useEffect, useMemo, useState } from 'react'
import { repoListT } from '../../../../Constant/Type'
import RepositoryListCard from '../RepositoryList/RepositoryListCard'
import Style from '../../../styles/Components/Vitrin.module.scss'
type MostPopularRepoT= {
    data:repoListT[]
}
const MostPopularRepo:FC<MostPopularRepoT> = ({data}) => {
    const [searchValue , setSearchValue] = useState<string>()
    const [repoList , setRepoList] = useState<repoListT[]>(data)
    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }
    useMemo(() => {
        if(searchValue && searchValue?.length > 2){
            const filterRepo = data.filter((value) => value.name.toLowerCase().includes(searchValue?.toLowerCase() ?? ""));
            setRepoList(filterRepo)
            console.log("dilter" , searchValue)
        }else{
            setRepoList(data)
        }
        
    } , [searchValue])
  return (
    <div>
        <div>
            <input type='search' value={searchValue} onChange={(e) => handleSearch(e)} className={Style.container_input} placeholder='search...'/>
        </div>
        <div>
            {
                repoList?.map((item) => (
                    <RepositoryListCard repoInfo={item} key={item?.id}/>
                ))
            }
        </div>
    </div>
  )
}

export default MostPopularRepo