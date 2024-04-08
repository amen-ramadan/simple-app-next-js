
import React, { Suspense } from 'react'
import './postDetailsPage.css'
import PostDetails from '@/app/components/PostDetails';
import LoadingPostDetails from './loading';

export default function PostDetailsPage({ params }) {
  const postId = params.postId;

  return (
    <div className="post-details">
      <h1 className="page-title">Post Details</h1>
      <Suspense fallback={<LoadingPostDetails />}>
        <PostDetails postId={ postId } />
      </Suspense>
    </div>
  )
}
