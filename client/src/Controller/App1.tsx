import React from 'react';
import { Control, useForm, useWatch } from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
};

function IsolateReRender({ control }: { control: Control<FormValues> }) {
  const firstName = useWatch({
    control,
    name: 'firstName',
    defaultValue: 'default',
  });

  return <div>{firstName}</div>;
}

/**，Control是一種特殊的類型，用於存儲和管理表單的所有狀態。它通常與Controller組件一起使用，將表單狀態與UI組件連接起來。 */

/**useWatch: 是一種react-hook-form提供的特殊hook，它允許你監視特定的表單欄位並對它們的變化做出響應。 */

export default function App() {
  const { register, control, handleSubmit, watch } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <input {...register('firstName')} />
      <input {...register('lastName')} />
      <IsolateReRender control={control} />
      <p>{watch('lastName')}</p>
      <input type='submit' />
    </form>
  );
}
