import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LogoutButton from './LogoutButton'
const Header = () => {
  
  const session = false

  if(session) return (
    <header  className='sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm' >
      <div className='flex space-x-2'>
        <Image
          className='rounded-full mx-2 object-contain'
          src='https://links.papareact.com/jne'
          alt='Profile Picture'
          width={50}
          height={10}

        />
        <div>
          <p className='text-blue-400'>Logged in as:</p>
          <p className='font-bold text-lg'>Sudhanshu</p>
        </div>
      </div>

      <LogoutButton />
    </header>
  )

  return (
    <header className='sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm'>
        <div className='flex flex-col items-center space-y-2'>
            <div className='flex flex-row space-x-2 items-center'>
                <Image
                    src='https://links.papareact.com/jne'
                    alt='logo'
                    width={50}
                    height={10}
                />
                <p className='text-blue-400'>Welcome to Meta Messenger</p>
            </div>
            <Link
              href='/auth/signin'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded'
              >
              Sign In
            </Link>
        </div>
    </header>
  )
}

export default Header