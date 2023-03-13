import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function EventPage({data}) {
  return (
    <div className='events_page'>
              {data.map(ev =>(
                <Link key={ev.id} href={`/events/${ev.id}`} passHref>
                    <div className='card'>
                        <Image alt={ev.title} width={300} height={300} src={ev.image} />
                        <h2>{ev.title}</h2>
                    </div>
                </Link>
              ))} 
            </div>   

  )
}
