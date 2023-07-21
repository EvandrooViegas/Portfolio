import React from 'react'
import { links } from './links'
import NavLink from './NavLink'

export default function NavLinks() {
  return (
    <ul className='flex items-center gap-6'>
        {links.map(link => <NavLink key={link.name} {...link} />)}
    </ul>
  )
}
