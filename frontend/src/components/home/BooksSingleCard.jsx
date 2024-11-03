import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle, BiShow } from 'react-icons/bi'
import {useState} from 'react'
import BookModal from './BookModal'

const BooksSingleCard = ({item}) => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div
            key={item._id}
            className='border-2 border-gray-500 rounded-lg px-4 py-2 my-4 relative hover:shadow-xl'
        >
            <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
                {item.publishYear}
            </h2>
            <h4 className='my-2 text-gray-500'>{item._id}</h4>
            <div className='flex justify-start items-center gap-x-2'>
                <PiBookOpenTextLight className='text-2xl text-sky-800' />
                <h2 className='text-xl font-bold'>{item.title}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <BiUserCircle className='text-2xl text-sky-800' />
                <h2 className='text-xl font-bold'>{item.author}</h2>
            </div>
            <div className='flex justify-center gap-x-4'>
                <BiShow className='text-2xl text-green-800' onClick={() => setShowModal(true)} />
                <Link to={`/books/details/${item._id}`}>
                    <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/books/edit/${item._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/books/delete/${item._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
            </div>
            {showModal && <BookModal item={item} onClose={() => setShowModal(false)} />}
        </div>
    )
}

export default BooksSingleCard
