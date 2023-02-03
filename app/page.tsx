import { env } from 'process'
import React from 'react'
import { Message } from '../typing'
import ChatInput from './ChatInput'
import MessageLists from './MessageLists'

async function HomePage() {
  const data =  await fetch(`${process.env.VERCEL_URL || "http://localhost:3000"}/api/getMessages`).then(
    (res) => res.json()
  )
  
  const messages: Message[] = data.messages

  return (
    <main>
      <MessageLists initialMessages = {messages} />
      <ChatInput />
    </main>
  )
}

export default HomePage