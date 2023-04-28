import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Htag } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>H1 text</Htag>
      <Htag tag='h2'>H2 text</Htag>
      <Htag tag='h3'>H3 text</Htag>
    </>
  );
}
