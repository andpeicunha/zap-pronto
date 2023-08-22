"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import S from "./sidebar.module.scss";

export const Sidebar = (props: any) => {
  // const { data: session } = useSession();

  return (
    <>
      <div className={S.sidebarMain}>
        <div className={S.sidebarLogo}>
          <Image
            src="/images/logotipo.png"
            width={384}
            height={55}
            alt="logotipo"
            className={S.logotipo}
            data-testid="logotipo"
          />
        </div>
        <div className={S.sidebarMenu}>
          <div onClick={props.onClick} data-testid="inicio">
            <Image
              src="/images/icon-inicio.svg"
              width={18}
              height={18}
              alt="logotipo"
              className={S.iconMenu}
            />
            Início
          </div>
          <div onClick={props.onClick}>
            <Image
              src="/images/icon-client.png"
              width={18}
              height={18}
              alt="logotipo"
              className={S.iconMenu}
            />
            Clientes
          </div>
          <div onClick={props.onClick}>
            <Image
              src="/images/icon-message.png"
              width={18}
              height={18}
              alt="logotipo"
              className={S.iconMenu}
            />
            Mensagens
          </div>
          <div onClick={props.onClick}>
            <Image
              src="/images/icon-config.png"
              width={18}
              height={18}
              alt="logotipo"
              className={S.iconMenu}
            />
            Configurações
          </div>
          <div onClick={props.onClick}>
            <Image
              src="/images/icon-suport.png"
              width={18}
              height={18}
              alt="logotipo"
              className={S.iconMenu}
            />
            Suporte
          </div>
        </div>
      </div>
    </>
  );
};
