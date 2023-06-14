import React from 'react';
import { Resolver, useForm } from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
};

/**Resolver 是一個函數，它接受表單數據作為參數，然後返回一個對象，對像中包含驗證結果和錯誤信息。
 * react-hook-form 將這個返回的對像用於顯示錯誤和決定表單是否可以提交。 */

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.firstName ? values : {},
    errors: !values.firstName
      ? {
          firstName: {
            type: 'required',
            message: 'This is required.',
          },
        }
      : {},
  };
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <input {...register('firstName')} placeholder='Bill' />
      {errors?.firstName && <p>{errors.firstName.message}</p>}

      <input {...register('lastName')} placeholder='Luo' />

      <input type='submit' />
    </form>
  );
}
