'use client'
import React, { FC, useState } from 'react'
import RepositoryListCard from './RepositoryListCard';
import Button from '@/Ui/Common/Button';
import Style from '../../../styles/Components/RepositoryListIterate.module.scss'
type repoListT = {
    id:number,
    name:string,
    forksCount:number,
    lastUpdate:string,
    star:number
};
type RepositoryListIterateT = {
    data:repoListT[]
}
const RepositoryListIterate:FC<RepositoryListIterateT> = ({data}) => {
    const [repoList , setRepoList] = useState<repoListT[]>(data);

    const handleSortStar = () => {
        const sorted = [...repoList].sort((a , b) => b?.star - a?.star)
        setRepoList(sorted)
    }
    const handleSortFork = () => {
        const sorted = [...repoList].sort((a , b) => b?.forksCount - a?.forksCount)
        setRepoList(sorted)
    }
    const handleSortDate = () => {
        const sorted = [...repoList].sort((a , b) => {
            const aDate = new Date(a.lastUpdate);
            const bDate = new Date(b.lastUpdate);
            return bDate as any - (aDate as any)
        })
        setRepoList(sorted)
    }
    
        return (
            <div>
                <div className={Style.buttonContainet}>
                    <Button onClick={handleSortStar}>
                        sort by star
                    </Button>
                    <Button onClick={handleSortFork}>
                        sort by fork
                    </Button>
                    <Button onClick={handleSortDate}>
                        sort by date
                    </Button>
                </div>
                <div>
                    {
                        repoList && repoList?.map((item) => (
                            <RepositoryListCard key={item.id} repoInfo={item}/>
                        )) 
                    }
                </div>
            </div>
          )
    
  
}

export default RepositoryListIterate