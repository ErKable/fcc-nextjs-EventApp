import { Inter } from 'next/font/google'
import { HomePage } from '@/src/components/home/home-page'
const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    <div>           
      <HomePage data={data} />    
    </div>
  )
}

export async function getServerSideProps(){//this needs to be exported as a stand alone function
  //this code only run on teh server and it's executed before the rendering of the page
  //here we can use private values since the client has not access to this code
  const {events_categories} = await import('/data/data.json')
  console.log(events_categories)
  return {
    props:{ //here we can pass wny props we want our page to have
      data: events_categories,
    }
  }
}