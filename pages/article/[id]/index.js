import {useRouter} from 'next/router';

const article = () => {

    return <div></div>

}

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode,com/posts/${context.params.id}`);

    const article = await res.json();

    return {
        props: {
            article
        }
    }
}

export default article;