//npx create-next-app next-js
//yarn add sass
//yarn add --dev @types/node

import { AppProps } from 'next/app';
import Head from "next/head";
import '../styles/globals.scss'
import {Layout} from "../components/Layout";

const MyApp = ({ Component, pageProps }:AppProps) => {
  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap" rel="stylesheet"/>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default MyApp
