import Pusher from 'pusher'
import ClientPusher from 'pusher-js'

export const serverPusher = new Pusher({
    appId : "1541686",
    key : "b4cdc80136b9c32878a7",
    secret : "5bd0ca3bf8daa35757bd",
    cluster : "ap2",
    useTLS: true,
})

export const clientPusher = new ClientPusher('b4cdc80136b9c32878a7', {
      cluster: 'ap2',
      forceTLS: true,
    })







