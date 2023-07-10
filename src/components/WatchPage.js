import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer'
import LiveChat from './LiveChat'

function WatchPage() {

    const [params] = useSearchParams()
    const dispatch = useDispatch()

    useState(() => {
        dispatch(closeMenu())
    }, [])


    return (
        <div className='flex flex-col w-full'>
            <div className='px-5 flex '>
                <div>
                    <iframe
                        width="900"
                        height="550"
                        src={"https://www.youtube.com/embed/" + params.get("v")}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    >
                    </iframe>
                </div>
                <div className='w-full'>
                    <LiveChat />
                </div>
            </div>
            <div className='p-2 m-5'>
                <CommentContainer />
            </div>
        </div>
    )
}

export default WatchPage