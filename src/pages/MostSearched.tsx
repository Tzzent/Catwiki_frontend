import { Link } from 'react-router-dom';
import CardBreed from '../components/CardBreed';
import Head from '../components/Head';
import { SearchHistory } from './AboutBreed';

export default function MostSearched() {
  const breeds: SearchHistory[] = JSON.parse(localStorage.getItem('history') || '[]');

  return (
    <>
      <Head title={`Top ${breeds.length} most searched breeds`} />
      <section className="flex flex-col gap-14">
        {breeds?.reverse()?.map((breed, index) => {
          return (
            <div
              key={index}
              className="
              flex 
              flex-col 
              gap-5 
              shadow-lg 
              rounded-3xl 
              p-5
              text-white
              bg-gray-900
              sm:flex-row-reverse
              md:text-black
              md:bg-transparent
              sm:shadow-none
              md:p-0
            "
            >
              <Head
                title={(index + 1) + '. ' + breed.name}
                description={breed.description}
                className="w-full"
              />
              <Link to={`/breed/${breed.id}`}>
                <CardBreed image={breed.image} className="max-w-[16em]" />
              </Link>
            </div>
          )
        })}
      </section>
    </>
  )
}
