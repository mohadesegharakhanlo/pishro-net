import React from 'react'
import { Octokit} from 'octokit'
import Image from 'next/image'
import Link from 'next/link'
import Style from '../../../styles/Components/UserInfo.module.scss'

type userInfoT = {
    name:string|null,
    profile:string|null,
    address:string|null,
    publicRepo:number|null
}
const UserInformation = async ({username}:any) => {
    const octokit = new Octokit({})
    let userInfo:userInfoT = {
        name:null,
        profile:null,
        address:null,
        publicRepo:null
    }
    await octokit.request("GET /users/{username}",{
        username:username
    }).then((res) => {
      userInfo = {
        name:res?.data?.login,
        profile:res?.data?.avatar_url,
        address:res?.data?.html_url,
        publicRepo:res?.data?.public_repos,
      }
    }).catch((error) => {
      console.log("error" , error)
    })
   
  return (
    <div className={Style.UserInfoContainer}>
        <img src={userInfo?.profile ? userInfo?.profile : ""} className={Style.UserInfoContainer_profile}/>
        <div>
            <p className={Style.UserInfoContainer_name}>{userInfo?.name}</p>
            <div className={Style.UserInfoContainer_github}>
                <Link href={userInfo?.address ? userInfo?.address : "/"}>
                    {userInfo?.address}
                </Link>
            </div>
            <div className={Style.UserInfoContainer_repo}>
                <p>public repository : {userInfo?.publicRepo}</p>
            </div>
        </div>
    </div>
  )
}

export default UserInformation