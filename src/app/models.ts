export type Weapon = {
  id: number;
  name: string;
  imageUrl: string;
  preferredCombo: string;
  comboDescription: string;
  bungieHash: number;
};

export type WeaponsResponse = {
  weapons: Weapon[]
}

export type Trait = {
  id: number;
  name: string;
  pveRating: number;
  pvpRating: number;
}

export type TraitsResponse = {
  traits: Trait[]
}

export type ApiResponse = {
  Response: {
    stats: {
      stats: WeaponStats;
    }
    hash: number;
  }
}

export type WeaponStats = {
    4043523819: {
        value: number;
    }
    1240592695: {
        value: number;
    }
    155624089: {
        value: number;
    }
    943549884: {
        value: number;
    }
    4188031367: {
        value: number;
    }
    3871231066: {
        value: number;
    }
  }

  export type Pick = {
    name: string;
    imageUrl: string;
    firstTrait: string;
    secondTrait: string;
    comment: string;
  }

  export type PicksResponse = {
    communities: Pick[];
  }

  export type PickResponse = {
    community: Pick;
  }
