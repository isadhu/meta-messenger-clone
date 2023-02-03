'use client'
import useSWR from 'swr'
import fetcher from '../utils/fetchMessages'
import { Message } from "../typing"
import MessageComponent from './MessageComponent'
import { useEffect } from 'react'
import { clientPusher } from '../pusher'
import { type } from 'os'

type Props = {
  initialMessages: Message[]
}

function MessageLists( {initialMessages} : Props){
  const { data: messages, error, mutate, } = useSWR<Message[]>('/api/getMessages', fetcher)

  useEffect(() => {

    const channel = clientPusher.subscribe("messages")

    channel.bind("new-message", async (data: Message) => {
      // if you send the message, no need to update cache
      if (messages?.find((message) => message.id === data.id)) return

      if(!messages) {
        mutate(fetcher)
      } else {
        mutate(fetcher,{
        optimisticData: [data, ...messages!],
        rollbackOnError:true,
      })
      }
    })

    return () => {
        channel.unbind_all()
        channel.unsubscribe()      
    }
  },[messages, mutate, clientPusher])
  return (
    <div className='space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:mx-w-4xl mx-auto'>
        {(messages || initialMessages ).map((message) => (
          <MessageComponent key={message.created_at} message={message} />
        ) )}
    </div>
  )
}

export default MessageLists