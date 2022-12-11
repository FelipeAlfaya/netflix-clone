// import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Row from '../components/Row'
import { Movie } from '../typings'
import requests from '../utils/requests'

interface props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

const Home = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}: props) => {
  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]'>
      <Head>
        <title>Início - Netflix</title>
        <link rel='icon' href='/pageicon.png' />
      </Head>

      <Header />
      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
        <Banner netflixOriginals={netflixOriginals} />
        <section className='md:space-y-24'>
          <Row title='Eleito na crítica' movies={topRated} />
          <Row title='Ação e aventura' movies={actionMovies} />
          {/*My List*/}
          {/* {list.lenght > 0 && <Row title="Minha Lista" movies={list} />} */}
          <Row title='Comédia na TV' movies={comedyMovies} />
          <Row title='Filmes de terror' movies={horrorMovies} />
          <Row title='Filmes de romance' movies={romanceMovies} />
          <Row title='Documentários' movies={documentaries} />
        </section>
      </main>
      {/* Modal */}
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const [
    trending,
    netflixOriginals,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    await fetch(requests.fetchTrending).then(async (res) => await res.json()),
    await fetch(requests.fetchNetflixOriginals).then(
      async (res) => await res.json()
    ),
    await fetch(requests.fetchTopRated).then(async (res) => await res.json()),
    await fetch(requests.fetchActionMovies).then(
      async (res) => await res.json()
    ),
    await fetch(requests.fetchComedyMovies).then(
      async (res) => await res.json()
    ),
    await fetch(requests.fetchHorrorMovies).then(
      async (res) => await res.json()
    ),
    await fetch(requests.fetchRomanceMovies).then(
      async (res) => await res.json()
    ),
    await fetch(requests.fetchDocumentaries).then(
      async (res) => await res.json()
    ),
  ])

  return {
    props: {
      trending: trending.results,
      netflixOriginals: netflixOriginals.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  }
}
