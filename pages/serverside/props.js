import Layout from '../../components/layout'
// import { getSortedPostsData } from '../../lib/posts'
import Image from 'next/image'
import Head from 'next/head'


export async function getServerSideProps(res){
  try {

    const result = await fetch(`https://api.themoviedb.org/3/movie/latest?api_key=${process.env.TMDB_TOKEN}&language=en-US`);
    const data = await result.json();
    console.log(data)
    
    return {
      props: { data }
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {}
    };
  }
};

export default function Home({ data }) {

    return (

        <Layout>
            {/* console.log(data) */}
            <Head>
                <title>The Movie DB</title>
            </Head>


            <div className="bg-gray-50 sm:pt-2">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Latest Movies (Server Side Props) <br />
                        </h2>
                    </div>
                </div>

                        <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 p-6">

                            <li className="relative">
                                <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                                    <Image
                                        height={144}
                                        width={144}
                                        src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
                                    <button type="button" className="absolute inset-0 focus:outline-none">
                                <span className="sr-only">{data.title}</span>
                                    </button>
                                </div>
                                <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{data.title}</p>
                                <p className="block text-sm font-medium text-gray-500 pointer-events-none">3.9 MB</p>
                            </li>

                        </ul>
                {/* {
                    data.map(({ data }) =>(


                    ))
                } */}


                




            </div>
        </Layout>
    )
}


