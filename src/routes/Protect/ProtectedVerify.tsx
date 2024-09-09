import React from 'react'
import { Navigate, useLocation, useNavigate, useSearchParams } from 'react-router-dom'

function ProtectedVerify({children}) {
    const [searchParams,setSearchParams] = useSearchParams()

    console.log('done')
  return children
}

export default ProtectedVerify