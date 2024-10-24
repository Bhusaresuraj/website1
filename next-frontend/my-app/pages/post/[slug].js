import { useRouter } from 'next/router';

const Post = ({ post }) => {
  if (!post) return <div>Loading...</div>; // Handle loading state

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export async function getStaticPaths() {
  // Fetch the list of posts to generate paths
  const res = await fetch('YOUR_API_ENDPOINT'); // Replace with your API endpoint
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug }, // Assuming each post has a 'slug' field
  }));

  return { paths, fallback: true }; // Enable fallback for new posts
}

export async function getStaticProps({ params }) {
  const res = await fetch(`YOUR_API_ENDPOINT/${params.slug}`); // Fetch the post by slug
  const post = await res.json();

  return {
    props: {
      post: post || null, // Pass the post data to the component
    },
  };
}

export default Post;
