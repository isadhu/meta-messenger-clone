"use client"

const LogoutButton = () => {
  return (
    <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded '
        onClick={() => console.log('hello') }
    >
        Sign Out
    </button>
  )
}

export default LogoutButton