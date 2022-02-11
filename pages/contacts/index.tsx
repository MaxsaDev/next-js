import { FC } from 'react';
import H from "../../components/H/H";
import Head from "next/head";
import Link from "next/link";
import {GetStaticProps} from 'next';
import {contactType} from "../../types";

type contactsType = {
    contacts: [contactType]
}

export const getStaticProps:GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  if(!data){
    return {notFound: true}
  }

  return {
    props: { contacts: data },
  }
};

const Contacts:FC<contactsType> = ({contacts}) => {

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <H text='Contacts list from jsonplaceholder:' />
      <ul>
        {
          contacts && contacts.map(({id, name, email} )=>(
            <li key={id}>
              <Link href={`/contacts/${id}`}>{name.toUpperCase()}</Link>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default Contacts;
