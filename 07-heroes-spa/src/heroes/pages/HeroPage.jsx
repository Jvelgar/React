import { Navigate, useNavigate, useParams } from "react-router";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);

  const navigate = useNavigate();
  const onNavigate = () => {
    navigate(-1);
  };
  if (!hero) {
    return <Navigate to="/" />;
  }
  return (
    <div className="">
      <div className=" p-8 flex">
        <img
          className="mb-4 rounded-lg"
          src={`../assets/heroes/${hero.id}.jpg`}
          alt={hero.superhero}
        />
        <div className="ml-4">
          <p className="text-gray-600 mb-2">Real Name: {hero.alter_ego}</p>
          <p className="text-gray-600 mb-2">Publisher: {hero.publisher}</p>
          <p className="text-gray-600 mb-2">
            First Appearance: {hero.firstAppearance}
          </p>

          <p className="text-gray-600 mb-2">Characters: {hero.characters}</p>
          <button
            onClick={onNavigate}
            className="bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded"
          >
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
};
