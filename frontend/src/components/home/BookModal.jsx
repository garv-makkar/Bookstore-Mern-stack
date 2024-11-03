import { AiOutlineClose } from 'react-icons/ai'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'

const BookModal = ({ item, onClose }) => {
    return (
        <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
            onClick={onClose}
        >
            <div
                onClick={(event) => event.stopPropagation()}
                className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-cols relative'
            >
                <AiOutlineClose className='absolute right-6 top-6 text-3xl text-red-600 curse-pointer'
                    onClick={onClose}
                />
                <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
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
                <p className='mt-4'>Anything You want to show</p>
                <p className='my-2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ea doloremque molestias placeat facere nobis, sint alias quis voluptates repellat adipisci dignissimos consequuntur in error suscipit harum illum ipsam doloribus?
                </p>
            </div>
        </div>
    )
}

export default BookModal
