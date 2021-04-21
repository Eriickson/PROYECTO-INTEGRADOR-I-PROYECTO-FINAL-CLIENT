export interface IPlan {
  name: string;
  description: string;
  price: {
    currency: string;
    amount: number;
  };
  benefits: {
    posts: number;
    postLimit: number;
    images: number;
  };
}
