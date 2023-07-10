import React from 'react'

function ChatMessage({ name, message }) {
    return (
        <div className='flex p-2 shadow-sm'>
            <img className='h-8' alt='account' src="https://icons.veryicon.com/png/o/miscellaneous/administration/account-25.png" />
            <span className='font-bold px-2'>{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage