import { Chance } from "chance";

const chance = new Chance();

export default function handler(request, response) {
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    profession: chance.profession(),
    phone: chance.phone(),
    twitterName: chance.twitter(),
    geohash: chance.geohash(),
  };
  response.status(200).json(character);
}
