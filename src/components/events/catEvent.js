import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function CatEvent({pageName, data}) {
  return (
    <div className='cat_events'>
    <h1>Events In {pageName}</h1>
     
    <div className='contents'>
        {data.map(ev => (            
            <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`}>
                <div className='cards'>
                    <Image alt={ev.title} width={300} height={300} src={ev.image}/>
                    <h2>{ev.title}</h2>
                    <p>{ev.description}</p>
                </div>
            </Link>            
            ))
        }
        </div>        
</div>
  )
}
