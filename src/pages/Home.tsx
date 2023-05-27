import CardBreed from '../components/CardBreed';
import Container from '../components/Container';
import Grid from '../components/Grid';
import Hero from '../components/Hero';
import TitleDash from '../components/TitleDash';
import { BsArrowRight } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchHistory } from './AboutBreed';

const defaultHistory: SearchHistory[] = [
  {
    id: '3dbtapCWM',
    name: 'Cymric',
    image: 'https://cdn2.thecatapi.com/images/3dbtapCWM.jpg',
    description: 'The Cymric is a placid, sweet cat. They do not get too upset about anything that happens in their world. They are loving companions and adore people. They are smart and dexterous, capable of using his paws to get into cabinets or to open doors.'
  },
  {
    id: '5AdhMjeEu',
    name: 'Bambino',
    image: 'https://cdn2.thecatapi.com/images/5AdhMjeEu.jpg',
    description:
      'The Bambino is a breed of cat that was created as a cross between the Sphynx and the Munchkin breeds. The Bambino cat has short legs, large upright ears, and is usually hairless. They love to be handled and cuddled up on the laps of their family members.'
  },
  {
    id: 'O3btzLlsO',
    name: 'Bengal',
    image: 'https://cdn2.thecatapi.com/images/O3btzLlsO.png',
    description:
      'Bengals are a lot of fun to live with, but they\'re definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn\'t provide it.'
  },
  {
    id: 'xnsqonbjW',
    name: 'American Curl',
    image: 'https://cdn2.thecatapi.com/images/xnsqonbjW.jpg',
    description:
      'Distinguished by truly unique ears that curl back in a graceful arc, offering an alert, perky, happily surprised expression, they cause people to break out into a big smile when viewing their first Curl. Curls are very people-oriented, faithful, affectionate soulmates, adjusting remarkably fast to other pets, children, and new situations.'
  },
];

export default function Home() {
  const [mostSearched, setMostSearched] = useState<SearchHistory[]>([]);

  useEffect(() => {
    getMostSearched();
  }, []);

  const getMostSearched = () => {
    const history: SearchHistory[] = JSON.parse(localStorage.getItem('history') || '[]');

    if (!history || history.length === 0) {
      localStorage.setItem('history', JSON.stringify(defaultHistory));
      return setMostSearched(defaultHistory);
    }

    setMostSearched(history);
  };

  return (
    <>
      <section className="bg-[#E3E1DC] rounded-[42px] overflow-hidden">
        <Hero />
        <Container className="pb-16">
          <h2>Most Searched Breeds</h2>
          <div className="flex items-center justify-between">
            <TitleDash
              label="66+ Breeds For you to discover"
              size="1.6em"
              className="max-w-[13em] lg:max-w-[18em] text-xs leading-5 lg:text-2xl lg:leading-10"
            />
            <Link
              to="/top-searched"
              className="
              text-amber-900
              text-xs
              font-bold
              flex 
              items-center
              gap-2
              my-8
              "
            >
              SEE MORE <BsArrowRight />
            </Link>
          </div>
          <Grid>
            {mostSearched?.slice(-4).reverse().map((breed) => (
              <Link
                key={breed.id}
                to={`/breed/${breed.id}`}
                className="
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
                hover:scale-105
                "
              >
                <CardBreed
                  image={breed.image}
                  label={breed.name}
                />
              </Link>
            ))}
          </Grid>
        </Container>
      </section>
      <section className="py-10 lg:py-20">
        <Container className="px-0 lg:flex items-center gap-10">
          <div className="max-w-2xl">
            <TitleDash
              label="Why should you have a cat?"
              size="1.6em"
              className="max-w-[16em] lg:text-2xl lg:leading-10"
            />
            <p className="text-xl">
              Having a cat around you can actually trigger the release of calming
              chemicals in your body which lower your stress and anxiety leves
            </p>
            <a
              href="https://www.goodnet.org/articles/7-scientifically-proven-health-benefits-being-cat-owner#:~:text=THEY%20REDUCE%20STRESS%20AND%20ANXIETY,you%20and%20your%20cat%20happy."
              target="_blank"
              className="
              text-amber-900
              text-xs
              font-bold
              flex 
              items-center
              gap-2
              my-8
              "
            >
              READ MORE <BsArrowRight />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <img src="/assets/images/image 2.png" className="object-cover rounded-lg" />
            </div>
            <div className="col-start-2 row-span-2">
              <img src="/assets/images/image 3.png" className="object-cover rounded-lg" />
            </div>
            <div className="col-start-1 ml-10 place-self-end">
              <img src="/assets/images/image 1.png" className="object-cover rounded-lg" />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
