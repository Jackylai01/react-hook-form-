import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  /**formState  isDirty: 用戶是否至少修改過一次輸入字符段。
    isValid: 表單是無效的。
    errors: 包含所有表驗證錯誤的對比圖。 */

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('firstName', { required: true })}
        aria-invalid={errors.firstName ? 'true' : 'false'}
      />
      {errors.firstName?.type === 'required' && (
        <p role='alert'>First name is required</p>
      )}

      <input
        {...register('mail', { required: 'Email Address is required' })}
        aria-invalid={errors.mail ? 'true' : 'false'}
      />
      {errors.mail && <p role='alert'>{String(errors.mail?.message)}</p>}

      <input type='submit' disabled={!isValid} />

      {isDirty && <p>You have unsaved changes</p>}
    </form>
  );
}
