import React from 'react'
import Button from './Button'

function ButtonList() {
    const list = ["All", "Live", "Gaming", "Cricket", "Cooking", "Football", "Sachin", "Dhoni", "Kohli", "Web Series", "Live"]
    return (
        <div className='flex'>
            {list.map((item, index) => (
                <Button key={index} name={item} />
            ))}
        </div>
    )
}

export default ButtonList