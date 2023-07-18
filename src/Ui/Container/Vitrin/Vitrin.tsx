'use client'
import Button from '@/Ui/Common/Button'
import React, { useState } from 'react'
import Style from '../../../styles/Components/Vitrin.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Vitrin = () => {
    const [username , setUsername] = useState<string>()
    const handleGoUsernamePage = () => {
       // router.push({pathname:"/"+[username]})
    }
  return (
    <div className={Style.container}>
        <div>
            <h1>
                pishro net compony
            </h1>
        </div>
        <div>
            <p className={Style.container_text}>
            Enter the username you want to see its GitHub
            </p>
            <input className={Style.container_input} onChange={(e) => setUsername(e.target.value)}/>
            <Link href={{pathname:"/"+[username]}}>
                <Button onClick={handleGoUsernamePage}>
                    submit
                </Button>
           </Link>
        </div>
        <div className={Style.container_mostpopular}>
            <Link href={{pathname:"/most-popular"}}>
                this link you can see most popular repositories
            </Link>
        </div>
        
        
    </div>
  )
}

export default Vitrin