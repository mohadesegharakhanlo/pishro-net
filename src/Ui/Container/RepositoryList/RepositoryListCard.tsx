import React, { FC } from 'react'
import style from '../../../styles/Components/RepositoryListCard.module.scss'
import { repoListT } from '../../../../Constant/Type'

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