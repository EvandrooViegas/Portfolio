import React from 'react'
type Props = {
    title: string
}
export default function Title(props:Props) {
  const { title } = props
    return (
    <span className='transition text-2xl font-bold w-fit bg-foreground cursor-pointer hover:bg-primary px-8 py-2.5 rounded-full'>{title}</span>
  )
}
