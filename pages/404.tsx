import { useEffect } from "react";
import { useRouter } from 'next/router';
import H from "../components/H/H";
import Head from "next/head";

const Error = () =>{
  const router = useRouter();

  useEffect(()=> {
    setTimeout(()=> {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Error</title>
      </Head>

      <H text={404}/>
      <H tag={'h2'} text={'Something is going wrong...'}/>
    </>
  );
};

export default Error;