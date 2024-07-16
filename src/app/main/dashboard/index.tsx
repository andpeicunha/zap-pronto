'use client';
import { LoginNavBar } from '@/app/main/dashboard/loginTopBar/';
import { fetchApi } from '@/utils/fetch';
import useSWR from 'swr';
import { Separator } from '../../../components/ui';
import { MenuSideBar } from '../sidebar';
import RegisterPanel from './registerPanel';

export const Dashboard = () => {
  const { data } = useSWR('userdb', () => fetchApi('user/getUserDb'));
  console.log('data: ', data?.users); // TODO: Validate if the user has an instance

  return (
    <section id="dash" className="flex h-screen">
      <div className="bg-[#D1DFEB] rounded-r-xl w-[250px] h-auto">
        <MenuSideBar />
      </div>
      <div className="flex flex-col w-full h-full">
        <LoginNavBar />
        <Separator className="w-auto ml-10" />
        <div className="">
          <RegisterPanel />
        </div>
      </div>
    </section>
  );
};
