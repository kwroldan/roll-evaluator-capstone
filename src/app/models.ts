export type Trait = {
  name: string;
  imageUrl: string;
  description: string;
  rating: number;
};

export type Weapon = {
  name: string;
  imageUrl: string;
  firstTrait: string;
  secondTrait: string;
};
