import H from '../../components/H/H';
import Head from 'next/head';
import Link from 'next/link';
import {GetStaticProps} from 'next';

export const getStaticProps:GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  if(!data){
    return {notFound: true}
  }

  return {
    props: { posts: data },
  }
};

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <H text='Posts list from jsonplaceholder:'/>
      <ul>
        {
          posts && posts.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title.toUpperCase()}</Link>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Posts;
