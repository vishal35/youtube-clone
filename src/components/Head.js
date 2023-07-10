import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constant'
import { cacheResults } from '../utils/searchSlice'

function Head() {
    const [searchQuery, setSearchQuery] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestion, setShowSuggestion] = useState(false)

    const searchCache = useSelector(store => store.search)

    const dispatch = useDispatch()

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery])
            } else {
                getSearchSuggestions()
            }
        }, 200)

        return () => {
            clearInterval(timer)
        }
    }, [searchQuery])

    const getSearchSuggestions = async () => {
        console.log(searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json()
        setSuggestions(json[1])
        dispatch(cacheResults({
            [searchQuery]: json[1]
        }))
    }

    const handleToggleMenu = () => {
        dispatch(toggleMenu())
    }

    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img className='h-8 cursor-pointer' onClick={handleToggleMenu} alt='Menu' src='https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg' />
                <img className='h-8 mx-2' alt='Logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png' />
            </div>
            <div className='col-span-10'>
                <div>
                    <input className='w-1/2 border border-gray-100 p-2 rounded-l-full'
                        type='text'
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestion(true)}
                        onBlur={() => setShowSuggestion(false)}
                    />
                    <button className='border border-green-100 p-2 rounded-r-full bg-gray-100'>Search</button>
                </div>
                {showSuggestion && <div className='fixed bg-white py-2 px-5 w-96 shadow-lg rounded border border-grey-100'>
                    <ul>
                        {suggestions && suggestions.map(s => (
                            <li key={s} className='py-2 shadow-sm hover:bg-gray-100'>{s}</li>
                        ))}

                    </ul>
                </div>}
            </div>
            <div className='col-span-1'>
                <img className='h-8' alt='account' src="https://icons.veryicon.com/png/o/miscellaneous/administration/account-25.png" />
            </div>
        </div>
    )
}

export default Head