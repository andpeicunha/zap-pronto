import { BoxCore, Button, TextField, Title } from '@/components/ui';
import { personSchema } from '@/utils/form/zod/zodSchema';
import { zodResolver } from '@hookform/resolvers/zod';
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

  const onSubmit = (data: any) => console.log(data);

  return (
    <BoxCore variant="bg-gray-bluish-dark">
      <form onSubmit={handleSubmit(onSubmit, onFormError)}>
        <Title size="small">Cadastro de Contatos</Title>

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

        <Button name="Cadastrar Contato" type="submit" data-testid="button:register-multiples-contacts" size="lg" />
      </form>
    </BoxCore>
  );
}

export default RegisterClients;
