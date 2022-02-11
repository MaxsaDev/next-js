import {FC} from 'react';
import Head from "next/head";
import H from '../components/H/H';
import Socials from "../components/Socials/Socials";
import styles from "../styles/Home.module.scss";
import { GetStaticProps } from 'next';
import { socialType } from "../types";
import socials from "../components/Socials/Socials";

type socialProps = {
  socials: [socialType],
}

export const getStaticProps:GetStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials/`);
    const data = await response.json();

    if (!data) {
      return {notFound: true}
    }

    return {
      props: {socials: data},
    }
  } catch (e) {
    console.log(e)
    return {
      props: {socials: null},
    }
  }

};

const Home:FC<socialProps> = ({socials}) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className={styles.wrapper}>
        <H text={'Next JS!'.toUpperCase()}/>
        <Socials socials={socials} />
      </div>

    </>
  )
}

export default Home;
