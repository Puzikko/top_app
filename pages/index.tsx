import { Inter } from 'next/font/google';
import { Button, Htag, P, Tag } from '@/components';
import { useState } from 'react';
import { Rating } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {

  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <Htag tag='h1'>H1 text</Htag>
      <Htag tag='h2'>H2 text</Htag>
      <Htag tag='h3'>H3 text</Htag>
      <P>{counter}</P>
      <Button appearance='primary' arrow='down'>Button</Button>
      <Button appearance='ghost' arrow='right' onClick={() => setCounter(x => x + 1)}>Button</Button>
      <P size='small'>Watsss up?</P>
      <P>Watsss up?</P>
      <P size='large'>Watsss up?</P>
      <Tag>Ghost tag</Tag>
      <Tag color='gray' size='medium'>Gray tag</Tag>
      <Tag color='green'>Green tag</Tag>
      <Tag color='red' size='medium'>Red tag</Tag>
      <Tag color='primary'>Primary tag</Tag>
      <Rating isEditable={true} raiting={3} />
    </>
  );
}
