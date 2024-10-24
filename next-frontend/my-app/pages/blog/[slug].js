import { useRouter } from 'next/router'
 
const Post=()=>{
  const router = useRouter()
  const {slug}=router.query

  // Check if slug is defined before rendering
  if (!slug) {
    return <p>Loading...</p>
  }

  return <p>Post: {slug}</p>
}
export default Post
