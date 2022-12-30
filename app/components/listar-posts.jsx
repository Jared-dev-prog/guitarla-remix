import Posts from '~/components/posts'

const ListarPosts = ({posts}) => {
  return (
      <div className='blog'>
        {posts.map(post => (
          <Posts 
            key={post.id}
            post={post.attributes}
          />
        ))}
      </div>
  )
}

export default ListarPosts
