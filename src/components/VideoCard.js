import React from 'react'

function VideoCard({ info }) {
    const { snippet, statistics } = info
    const { channelTitle, title, thumbnails } = snippet
    return (
        <div className='p-2 m-2 w-56 shadow'>
            <img alt="thumbnail" src={thumbnails.medium.url} />
            <ul>
                <li className='font-bold py-2'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} Views</li>
            </ul>
        </div>
    )
}

export default VideoCard