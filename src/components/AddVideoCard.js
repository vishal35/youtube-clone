import React from 'react'
import VideoCard from './VideoCard'

function AddVideoCard({ info }) {
    return (
        <div className='border-2 border-red-300'>
            <VideoCard info={info} />
        </div>
    )
}

export default AddVideoCard