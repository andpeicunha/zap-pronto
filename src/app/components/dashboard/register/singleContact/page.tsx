import { BoxCore, Button, TextField, TitleBox } from '@/app/components/core/page';
import { personSchema } from '@/app/utils/form/zod/zodSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { type SubmitErrorHandler, useForm } from 'react-hook-form';

interface FieldError {
  type: string;
  message: string;
}

interface FormErrors {
  [key: string]: FieldError;
}

function RegisterClients() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all', resolver: zodResolver(personSchema) });

  const onFormError: SubmitErrorHandler<FormErrors> = (e) => {
    console.log(e);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => console.log(data);

  return (
    <BoxCore variant="bg-gray-bluish-dark">
      <form onSubmit={handleSubmit(onSubmit, onFormError)}>
        <TitleBox textSize="small">Cadastro de Contatos</TitleBox>

        <TextField
          label="Nome"
          type="text"
          placeholder="Enter your name"
          name="name"
          errors={errors}
          register={register}
        />

        <TextField
          label="Email"
          type="email"
          name="email"
          placeholder="Enter your e-mail"
          errors={errors}
          register={register}
        />

        <Button
          name="Cadastrar Contato"
          type="submit"
          data-testid="button:register-multiples-contacts"
          size="lg"
          bgColor={''}
          textColor={''}
        />
      </form>
    </BoxCore>
  );
}

export default RegisterClients;
