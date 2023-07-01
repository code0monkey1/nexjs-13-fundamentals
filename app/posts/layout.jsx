import React from 'react'

const layout = ({children}) => {
  return (
    <>
      <h1>Nav page</h1>
      <div>{children}</div>
      <h2>Tail Page</h2>
      </>
  )
}

export default layout