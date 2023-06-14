import * as React from 'react';
import { useForm } from 'react-hook-form';
import '../App.css';

type FormValues = {
  firstName: string;
  lastName: string;
};

export default function App() {
  const [renderCount, setRenderCount] = React.useState(0);
  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  const onSubmit = async (data: any) => {
    setRenderCount((prevCount) => prevCount + 1);
    return data;
  };

  return (
    <>
      <main
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('firstName')} placeholder='First Name' />
          <input {...register('lastName')} placeholder='Last Name' />
          <input type='submit' className='button' />
        </form>
      </main>
    </>
  );
}
