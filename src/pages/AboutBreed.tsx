import { times } from 'lodash';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import SkeletonBreed from '../components/skeletons/SkeletonBreed';
import CardBreed from '../components/CardBreed';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Head from '../components/Head';
import Raiting from '../components/Raiting';
import SkeletonList from '../components/skeletons/SkeletonList';

export interface BreedProps {
  id: string,
  url: string,
  width: number,
  height: number
  breed: {
    weight: { imperial: string, metric: string },
    id: string,
    name: string,
    cfa_url: string,
    vetstreet_url: string,
    vcahospitals_url: string,
    temperament: string,
    origin: string,
    country_codes: string,
    country_code: string,
    description: string,
    life_span: string,
    indoor: number,
    lap: number
    alt_names: string,
    adaptability: number,
    affection_level: 5,
    child_friendly: number,
    dog_friendly: number,
    energy_level: number,
    grooming: number,
    health_issues: number,
    intelligence: number,
    shedding_level: number,
    social_needs: number,
    stranger_friendly: number,
    vocalisation: number,
    experimental: number,
    hairless: number,
    natural: number,
    rare: number,
    rex: number,
    suppressed_tail: number,
    short_legs: number,
    wikipedia_url: string,
    hypoallergenic: number,
    reference_image_id: string,
  },
  images: Array<{
    id: string,
    url: string,
    width: number,
    height: number,
  }>
}

export interface SearchHistory {
  id: string,
  name: string,
  image: string,
  description: string,
}

export default function AboutBreed() {
  const { id } = useParams();
  const [breed, setBreed] = useState<BreedProps>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchBreed = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_CAT_API}/breeds/${id}`);
        const data = await response.json();

        saveHistory(data.id, data.breed.name, data.url, data.breed.description);
        setBreed(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBreed();
  }, [id]);

  const saveHistory = (
    id: string,
    name: string,
    image: string,
    description: string,
  ) => {
    const prevHistory: SearchHistory[] = JSON.parse(localStorage.getItem('history') || '[]');
    const existingIndex = prevHistory.findIndex(item => item.name === name);

    if (existingIndex !== -1) {
      const existingItem = prevHistory.splice(existingIndex, 1)[0];
      prevHistory.push(existingItem);
    }

    if (existingIndex === -1) {
      prevHistory.push({ id, name, image, description });
    }

    if (prevHistory.length > 10) {
      prevHistory.shift();
    }

    localStorage.setItem('history', JSON.stringify(prevHistory));
  };

  return (
    <div>
      <section>
        <Container
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          "
        >
          {loading ? (
            <SkeletonBreed
              className="min-h-[15em]"
            />
          ) : (
            <div className="
            place-self-center
            self-start
            aspect-square
            max-w-md
            relative
            first:before:content-[''] 
            first:before:absolute
            first:before:-left-2
            lg:first:before:-left-4
            first:before:top-[15%]
            first:before:w-2
            lg:first:before:w-4
            first:before:h-3/6
            lg:first:before:h-4/6
            first:before:rounded-l-2xl
            first:before:bg-[#DEC68B]
            "
            >
              <img
                alt={breed?.breed?.name}
                src={breed?.url}
                className="rounded-3xl shadow-sm w-full h-full object-cover"
              />
            </div>)}
          <div className="text-[#291507] font-[500]">
            <Head
              loading={loading}
              title={breed?.breed?.name}
              description={breed?.breed?.description}
            />
            {loading ? (
              <SkeletonList />
            ) : (
              <ul className="flex flex-col gap-7 text-xs lg:text-sm">
                <li className="flex gap-3">
                  <span className="font-bold">Temperament: </span> <p>{breed?.breed?.temperament}</p>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">Origin: </span> <p>{breed?.breed?.origin}</p>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">Life: </span> <p>{breed?.breed?.life_span} years</p>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold w-36">Adaptability: </span> <Raiting rate={breed?.breed?.adaptability} />
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold w-36">Affection level: </span> <Raiting rate={breed?.breed?.affection_level} />
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold w-36">Child Friendly: </span> <Raiting rate={breed?.breed?.child_friendly} />
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold w-36">Grooming: </span> <Raiting rate={breed?.breed?.grooming} />
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold w-36">Intelligence: </span> <Raiting rate={breed?.breed?.intelligence} />
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold w-36">Health issues: </span> <Raiting rate={breed?.breed?.health_issues} />
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold w-36">Social needs: </span> <Raiting rate={breed?.breed?.social_needs} />
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold w-36">Stranger friendly: </span> <Raiting rate={breed?.breed?.stranger_friendly} />
                </li>
              </ul>)}
          </div>
        </Container>
      </section>
      <section className="my-10">
        <Head
          loading={loading}
          title="Other photos"
        />
        <Grid>
          {loading ? (
            <>
              {times(8, (index) => (
                <SkeletonBreed
                  key={index}
                  className="aspect-square"
                />
              ))}
            </>
          ) : (
            <>
              {breed?.images?.slice(0, 8)?.map((breed, index) => (
                <CardBreed
                  key={index}
                  image={breed.url}
                  label={breed.id}
                  labelVisible={false}
                />
              ))}
            </>)}
        </Grid>
      </section>
    </div>
  )
}
