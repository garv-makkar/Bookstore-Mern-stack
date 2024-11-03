import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className={`bg-sky-800 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded ${showType === 'table' ? 'bg-sky-700' : ''
            }`}
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className={`bg-sky-800 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded ${showType === 'card' ? 'bg-sky-700' : ''
            }`}
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8 font-bold'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl hover:text-sky-700' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        showType === 'table' ? <BooksTable books={books} /> : <BooksCard books={books} />
      )}
    </div>
  )
}

export default Home
