import React from 'react'

export default function ArticleDetails ( { params } )
{
  console.log(params);
  return (
    <>
      <div>Article Details</div>
      <h1>{params.title}</h1>
    </>
  )
}
