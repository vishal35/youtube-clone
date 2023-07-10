import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import AddVideoCard from './AddVideoCard'

function VideoContainer() {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        getVideos()
    }, [])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API)
        const json = await data.json()
        setVideos(json.items);
    }

    return (
        <div className='flex flex-wrap'>
            {videos && videos.length && <Link key={videos[0].id} to={"/watch?v=" + videos[0].id}><AddVideoCard info={videos[0]} /></Link>}
            {videos.map(video => (
                <Link key={video.id} to={"/watch?v=" + video.id}><VideoCard info={video} /></Link>
            ))}
        </div>
    )
}

export default VideoContainer