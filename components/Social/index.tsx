import iSocialMedia from '@/types/iSocialMedia'
import React from 'react'
import Icon from '../Icon'

type Props = {
    social: iSocialMedia
}
export default function Social(props:Props) {
  const { social } = props
    return (
    <a href={social.link}>
      <Icon className='text-5xl hover:text-primary' icon={social.icon} />
    </a>
  )
}
