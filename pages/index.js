import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Crash Course</title>
      </Head>
      <h1>Welcome to Next.js</h1>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https:jsonplaceholder.typicode.com/posts?_limit=6`);
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}