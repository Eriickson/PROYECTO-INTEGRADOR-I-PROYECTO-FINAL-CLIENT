export interface IGraphqlApiBannerAlert {
  type: "DANGER" | "WARNING" | "SUCCESS";
  isActive: boolean;
  message: string;
  redirect?: boolean;
}
