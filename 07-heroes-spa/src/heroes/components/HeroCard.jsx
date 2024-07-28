import { Link } from "react-router-dom";

const CharacterByHero = ({ alter_ego, characters }) => {
  if (alter_ego !== characters) {
    return (
      <>
        <p className="text-gray-700 text-base">{characters}</p>
      </>
    );
  }
};

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImage = `./assets/heroes/${id}.jpg`;

  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex mb-4">
      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t  lg:rounded-l text-center overflow-hidden">
        <img src={heroImage} title={superhero} />
      </div>
      <div className="max-w-sm w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">
            {superhero}
          </div>
          <p className="text-gray-700 text-base">{alter_ego}</p>
          <CharacterByHero alter_ego={alter_ego} characters={characters} />
        </div>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={heroImage}
            alt={`Avatar of ${superhero}`}
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{publisher}</p>
            <p className="text-gray-600">{first_appearance}</p>
            <Link
              to={`/hero/${id}`}
              className="text-blue-500 hover:text-blue-800"
            >
              Ver mas detalles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
