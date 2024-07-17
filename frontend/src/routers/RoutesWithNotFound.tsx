import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ErrorPage } from '../pages/NotFound/ErrorPage'

interface Props {
  children: React.ReactNode
}

export const RoutesWithNotFound = ({children}:Props) => {
  return (
    <Routes>
      {children}
      <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
  )
}
