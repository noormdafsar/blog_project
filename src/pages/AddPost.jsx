import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-5'>
    Add Post
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost