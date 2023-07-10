import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice'
import { generateRandomName, randomStringGenerator } from "../utils/healper"

function LiveChat() {

    const [liveMessage, setLiveMessage] = useState("")

    const dispatch = useDispatch()

    const chatMessage = useSelector(store => store.chat.message)

    useEffect(() => {
        const timer = setInterval(() => {
            dispatch(addMessages({
                name: generateRandomName(),
                message: randomStringGenerator(20)
            }))
        }, 1500)

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <>
            <div className='ml-2 p-2 h-[550px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
                {chatMessage.map((c, index) => (
                    <ChatMessage
                        key={index}
                        name={c.name}
                        message={c.message}
                    />
                ))}
            </div>
            <form className='w-full p-2 ml-2 border border-black flex' onSubmit={(e) => {
                e.preventDefault();
                dispatch(addMessages({
                    name: "Vishal Rajput",
                    message: liveMessage
                }))
                setLiveMessage("")
            }}>
                <input
                    className='px-2 w-full border border-black'
                    type='text'
                    value={liveMessage}
                    onChange={e => setLiveMessage(e.target.value)}
                />
                {/* <button className='px-3 mx-2 bg-green-100'>Send</button> */}
            </form>
        </>
    )
}

export default LiveChat