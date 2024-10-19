import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className='w-full h-[80px]  flex items-center justify-between px-5'>
        <div className="tx_sh text-white font-bold text-4xl uppercase">outfit</div>
        <ul className="links flex items-center gap-10 font-bold text-xl">
            <li>
                <Link href={'/'} className='tx_sh px-5 py-2 rounded-xl text-2xl underline font-bold text-white'>Home</Link>
            </li>
            <li>
                <Link href={'/Wardrobe'} className='tx_sh px-5 py-2 rounded-xl text-2xl underline font-bold text-white'>Wardrobe</Link>
            </li>
        </ul>   
    </nav>
  )
}

export default Nav