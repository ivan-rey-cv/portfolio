import React from 'react'

function Loading(props) {
  return (
    <div>
      <h1
        style={{
          margin: '0 auto',
        }}
      >
        Loading...
      </h1>
    </div>
  )
}

export default React.memo(Loading)
