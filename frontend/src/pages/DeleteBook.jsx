import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import { useSnackbar } from 'notistack'


const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        alert('Something went wrong! Check the console for more information.');
        enqueueSnackbar('Something went wrong', { variant: 'error' });
        setLoading(false);
      });
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-8 font-bold'>Delete Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col gap-y-4'>
          <p className='text-xl'>Are you sure you want to delete this book?</p>
          <button
            className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'
            onClick={handleDeleteBook}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  )
}

export default DeleteBook
