import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className='bg-gray-200 px-6 py-3'>
      <div className='container mx-auto'>
        <Link to='/'>
          <svg
            width='79'
            height='20'
            viewBox='0 0 79 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0 .246V20h15.122v-4.127H4.358v-3.98H14.75V7.764H4.357v-3.39h10.657V.245H0zm18.94 0V20h12.969v-4.127h-8.61V.246H18.94zm47.54 7.901h6.032c1.276 0 1.834-.59 1.834-1.886 0-1.298-.558-1.887-1.834-1.887H66.48v3.773zM62.12 20V.245h10.365c4.092 0 6.272 2.034 6.272 6.015 0 3.98-2.18 6.014-6.272 6.014H66.48V20H62.12zM49.74 10.123c5.285 0 9.586 4.43 9.586 9.876h-4.857c0-2.686-2.122-4.872-4.73-4.872-2.608 0-4.73 2.186-4.73 4.872h-4.857c0-5.446 4.3-9.876 9.587-9.876zM34.177.246c0 2.687 2.121 4.873 4.73 4.873 2.607 0 4.729-2.186 4.729-4.873h4.857c0 5.446-4.3 9.877-9.587 9.877-5.286 0-9.587-4.43-9.587-9.877h4.858z'
              fill='#0D0D0D'
            ></path>
          </svg>
        </Link>
      </div>
    </header>
  )
}

export default Header
