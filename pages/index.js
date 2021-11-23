import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {

  return (

    <Layout>
      <div className="bg-gray-50 pt-12 sm:pt-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Blog List
            </h2>
          </div>
        </div>

        <div className="mt-10 pb-12 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">

                  {
                    allPostsData.map(
                      ({id, date, title}) => (
                        <div key={id} className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                          <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                            {id}
                          </dt>
                          <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                            {date}
                          </dt>
                          <dd className="order-1 text-lg font-bold text-indigo-600">
                            {title}
                          </dd>
                        </div>
                      )
                    )
                  }

                  

                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
