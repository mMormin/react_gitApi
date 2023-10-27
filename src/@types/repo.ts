export type Repo = {
  id: number;
  name: string;
  full_name: string;
  description: string;
  owner: Owner;
};

export type Owner = {
  avatar_url: string;
  login: string;
};
