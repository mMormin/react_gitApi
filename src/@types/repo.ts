export type Repo = {
  id: number;
  name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string | null;
};
