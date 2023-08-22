import {
  BoxCore,
  Button,
  TextField,
  TitleBox,
} from "@/app/components/core/page";
import { personSchema } from "@/app/utils/form/zod/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

function RegisterClients() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(personSchema) });

  const onSubmit = (data: any) => console.log(data);

  return (
    <BoxCore variant="bg-gray-bluish-dark">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TitleBox textSize="sm">Cadastro de Contatos</TitleBox>

        <TextField
          name="firstName"
          required
          register={register}
          label="Nome"
          messageError="Texto Erro"
        />
        <TextField
          required
          register={register}
          label="Sobrenome"
          name="lastName"
        />
        <TextField required register={register} label="Whatsapp" name="phone" />

        <Button
          name="Cadastrar Contato"
          type="submit"
          data-testid="button:register-multiples-contacts"
          size="lg"
          bgColor={""}
          textColor={""}
          bgHover={""}
        />
      </form>
    </BoxCore>
  );
}

export default RegisterClients;
