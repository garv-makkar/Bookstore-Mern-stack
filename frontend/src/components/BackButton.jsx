import { Link } from 'react-router-dom'
import { BsArrowLeft} from 'react-icons/bs'

const BackButton = ({destination = '/'}) => {
  return (
    <div className='flex'>
        <Link to={destination} className='bg-sky-800 text-white px-4 py-2 rounded-md hover:bg-sky-700'>
            <BsArrowLeft className='inline-block mr-2' />
            Back
        </Link>
        
      
    </div>
  )
}

export default BackButton
