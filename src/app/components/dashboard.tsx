"use client";
import React from "react";
import { useSession } from "next-auth/react";

import { SheetJs } from "@/app/lib/importExcelSheet";
import { Sidebar } from "./sidebar";
import S from "./dashboard.module.scss";
import { Navbar } from "./navbar";

export const Dashboard = () => {
  const { data: session } = useSession({ required: true });

  return (
    <>
      <div className={S.container}>
        <div className={S.header}>
          <Navbar />
        </div>
        <div className={S.sidebar}>
          <Sidebar />
        </div>
        <div className={S.main}>main</div>
      </div>
    </>
  );
};
