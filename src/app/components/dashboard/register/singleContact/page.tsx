import { BoxCore, Button, TextField, TitleBox } from '@/app/components/core/page';
import { Input } from '@/app/components/core/textField/page';
import { personSchema } from '@/app/utils/form/zod/zodSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { SubmitErrorHandler, useForm } from 'react-hook-form';

function RegisterClients() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'all', resolver: zodResolver(personSchema) });

  const onFormError: SubmitErrorHandler<any> = (e) => {
    console.log(e);
  };

  const onSubmit = (data: any) => console.log(data);

  return (
    <BoxCore variant="bg-gray-bluish-dark">
      <form onSubmit={handleSubmit(onSubmit, onFormError)}>
        <TitleBox textSize="sm">Cadastro de Contatos</TitleBox>

        <Input label="Nome" type="text" placeholder="Enter your name" name="name" errors={errors} register={register} />

        <Input
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
          bgHover={''}
        />
      </form>
    </BoxCore>
  );
}

export default RegisterClients;
