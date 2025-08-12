import { Button } from '@/components/ui/button';

const Page = () => {
  return (
    <main className="h-full flex justify-center items-center border-2 flex-col">
      <h1>hello chai</h1>
      <div>
        <hr />
        <Button variant={'chai'} size={'sm'}>
          {' '}
          shadcn button
        </Button>
      </div>
    </main>
  );
};

export default Page;
