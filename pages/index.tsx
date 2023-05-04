import { Inter } from 'next/font/google';
import { Button, Htag, P } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>H1 text</Htag>
      <Htag tag='h2'>H2 text</Htag>
      <Htag tag='h3'>H3 text</Htag>
      <Button appearance='primary' arrow='right'>Button</Button>
      <Button appearance='ghost' arrow='right'>Button</Button>
      <P size='small'>Watsss up?</P>
      <P>Watsss up?</P>
      <P size='large'>Watsss up?</P>
    </>
  );
}
