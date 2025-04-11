import Agent from '@/components/Agent'
import DisplayTechIcons from '@/components/DisplayTechIcons'
import { getCurrentUser } from '@/lib/actions/auth.action'
import { getInterviewById } from '@/lib/actions/general.action'
import { getRandomInterviewCover } from '@/lib/utils'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

const Page = async ({params}: RouteParams) => {
  const { id } = await params
  const user = getCurrentUser()
  const interview = await getInterviewById(id)
  if(!interview) redirect('/')
  return (
    <>
      <div className="flex justify-between flex-row gap-4">
        <div className="flex-row flex gap-4 items-center max-sm:flex-col">
          <div className='flex flex-row gap-4 items-center'>
            <Image src={getRandomInterviewCover()} className='rounded-full object-cover size-[40px]' width={40} height={40} alt='cover-image' />
            <h3 className='capitalize'>{interview.role}</h3>
            <DisplayTechIcons techStack={interview.techstack} />
          </div>
          <p className='bg-dark-200 px-4 py-2 rounded-lg h-fit capitalize'>{ interview.type}</p>
        </div>
        <Agent userName={
          userNama = { user?.name}
          type={user?.id}
          interviewId={id}
          type="interview"
        questions={interview.questions}
         } />
    </div>
    </>
  )
}

export default Page