import { FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.scss';

const navigation = [
  { id:1, title: 'Home', path: '/' },
  { id:2, title: 'Posts', path: '/posts' },
  { id:3, title: 'Contacts', path: '/contacts' },
];

const Navbar:FC = () => {
  const { pathname } = useRouter();
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/logo.png" width={133} height={28} alt="Maxsa"/>
      </div>
      <div className={styles.link}>
        {
          navigation.map(({id, title, path}) => (
            <Link key={id} href={path}>
              <a className={pathname === path ? styles.active : null}>
                {title}
              </a>
            </Link>
          ))
        }
      </div>
    </nav>
  );
};

export default Navbar;