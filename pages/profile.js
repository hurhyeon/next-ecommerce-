import React from 'react'
import Layout from '../components/Layout'
import { UserCircleIcon,MailIcon,PhoneIcon,BookOpenIcon,AcademicCapIcon,CakeIcon} from "@heroicons/react/outline"


export default function profile() {
  return (
    
    <Layout>
      
      
    <header className="flex flex-col justify-between items-center ">

    <div className='bg-[url("https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdoaXRlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")]
        h-5/6 w-screen object-contain absolute mix-blend-overlay'
        >
      </div>
            <div className="flex cursor-pointer transform hover:scale-105 m-2 ">
                <p className="text-5xl font-extrabold" >-profile-</p>
            </div>
            
            <div className="flex cursor-pointer transform hover:scale-105 m-2">
                <UserCircleIcon className="h-10 w-10  " />
                <p className="text-4xl font-extrabold" >이름: 허현</p>
            </div>
            
            <div className="flex cursor-pointer transform hover:scale-105 m-2">
                <MailIcon className="h-10 w-10" />
                <p className="text-3xl font-extrabold" >이메일: nsksjsk2@hanmail.net</p>
            </div>
            
            <div className="flex cursor-pointer transform hover:scale-105 m-2">
                <PhoneIcon className="h-10 w-10" />
                <p className="text-3xl font-extrabold" >전화번호: 010-8612-1501</p>
            </div>
            
            <div className="flex cursor-pointer transform hover:scale-105 m-2">
                <BookOpenIcon className="h-10 w-10" />
                <p className="text-3xl font-extrabold" >전공: 정보보호학과</p>
            </div>

            <div className="flex cursor-pointer transform hover:scale-105 m-2">
                <AcademicCapIcon className="h-10 w-10" />
                <p className="text-3xl font-extrabold" >학번: 91813286</p>
            </div>

            <div className="flex cursor-pointer transform hover:scale-105 m-2">
                <CakeIcon className="h-10 w-10" />
                <p className="text-3xl font-extrabold" >생년월일: 1999-02-19</p>
            </div>      
            
        </header>
    </Layout>
    
  )
}
