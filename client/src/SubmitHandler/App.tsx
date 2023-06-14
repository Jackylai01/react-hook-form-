import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

/**handleSubmit(onSubmit)會做以下的事情：
1.防止表單的默認提交行為，即頁面刷新
2.自動提取表單的數據並將其作為對象返回
3.將返回的對象作為參數傳遞給onSubmit函數
4.如果表單數據不符合規則或有其他問題，它也會自動處理這些錯誤。 */

export default function App() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName')} />
      <input {...register('lastName')} />
      <input type='email' {...register('email')} />

      <input type='submit' />
    </form>
  );
}
