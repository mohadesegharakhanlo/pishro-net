import React, { FC } from 'react'
import style from '../../../styles/Components/RepositoryListCard.module.scss'
type repoListT = {
    id:number,
    name:string,
    forksCount:number,
    lastUpdate:string,
    star:number
};
type RepositoryListCardT = {
    repoInfo:repoListT
}
const RepositoryListCard:FC<RepositoryListCardT> = ({repoInfo}) => {
  return (
    <div className={style.container}>
        <p className={style.container_name}>{repoInfo.name}</p>
        <p>star {repoInfo.star}</p>
        <p>fork {repoInfo.forksCount}</p>
        <p className={style.container_date}>update {repoInfo.lastUpdate}</p>
    </div>
  )
}

export default RepositoryListCard