import React from 'react'

export const getSinglePost = async (post_id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
  const data = await res.json();

  return data;
}


export async function generateMetadata({ params }) {
  const { id } = await params
  const singlePost = await getSinglePost(id)

  return {
    title: singlePost.title,
    description: singlePost.body
  }
}



export default async function SinglePost({ params }) {
  const post = await params;
  const singlePost = await getSinglePost(post.id)
  return (
    <div className='m-5 p-5 border-2 border-slate-200 shadow rounded'>
      <h1 className='text-2xl font-bold py-4 text-red-500'>{singlePost.title}</h1>
      <p className='text-slate-500 semibold'>{singlePost.body}</p>
    </div>
  )
}
