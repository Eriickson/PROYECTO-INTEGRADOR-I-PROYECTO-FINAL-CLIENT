import { GetServerSideProps } from "next";

export interface SignInPageProps {
  ping: string;
}

export const SignInSsr: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
