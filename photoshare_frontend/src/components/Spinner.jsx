import React from 'react'
// import LinearProgress from '@mui/material/LinearProgress';
// import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = ({message}) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
        
          <CircularProgress
           className="m-5"
           
        />
        <p className="text-lg text-center px-2">{message}</p>
    </div>
  )
}

export default Spinner