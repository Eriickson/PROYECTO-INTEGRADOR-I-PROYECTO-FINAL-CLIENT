// NextJS
import { GetServerSideProps, NextApiRequest } from "next";

// Packages
import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/client";

// GraphQL
import { graphqlClient, GET_MY_PROFILE, IGetMyProfilePayload } from "@/graphql";

// My Elements
import { IOption, PayloadToken } from "@/shared";
import { config } from "@/config";

export interface ProfilePageProps {
  /* eslint-disable @typescript-eslint/no-explicit-any*/
  userData: any;
  nationalities: IOption[];
  provinces: IOption[];
  municipalities: IOption[];
  sectors: IOption[];
}

export const ProfileSsr: GetServerSideProps = async ctx => {
  try {
    const session = await getSession(ctx);

    if (!session) {
      ctx.res.writeHead(302, { Location: "/" });
      ctx.res.end();
    }
    const payloadToken = (await getToken({
      req: ctx.req as NextApiRequest,
      secret: config.tokens.tokenNextAuth,
    })) as PayloadToken;
    const { getMyProfile } = await graphqlClient<IGetMyProfilePayload>({
      query: GET_MY_PROFILE,
      variables: {
        userId: payloadToken.userId,
      },
    });

    const props: ProfilePageProps = {
      userData: getMyProfile.user,
      nationalities: getMyProfile.nationalities,
      provinces: getMyProfile.provinces,
      municipalities: getMyProfile.municipalities,
      sectors: getMyProfile.sectors,
    };
    return { props };
  } catch (err) {
    console.log(err);

    ctx.res.writeHead(302, { Location: "/" });
    ctx.res.end();

    throw new Error(err);
  }
};
