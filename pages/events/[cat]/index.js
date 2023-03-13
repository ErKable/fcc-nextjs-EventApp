import CatEvent from '@/src/components/events/catEvent';
import Image from 'next/image';
import Link from 'next/link';

const EventsCatPage = ({data, pageName}) => <CatEvent data={data} pageName={pageName}/>

export default EventsCatPage;

//This function is needed to tell NextJs how many path to create
//So if before any path which matched the structure events/[cat]/ could be picked
//with getStatichPaths are created only the path that are specified in the function
export async function getStaticPaths(){
    const {events_categories} = await import('/data/data.json')
    const allPaths = events_categories.map(ev => {
        return {
            params: {
                cat: ev.id.toString(),
            },
        }
    })
    //console.log(allPaths)
    return{
            paths: allPaths,
            fallback: false, //this parameter allow you to specify how the app
            //behave when ppl ask for path that are not defined in allPaths
            //true: the app render the page even though it doesn't exist
            //false: redirect the user to 404 page
        }
}

export async function getStaticProps(context){
    console.log(context) //Context has the params of the page
    const id =context?.params.cat //accessing the id the pointed cathegory
    const {allEvents} = await import('/data/data.json')
    const data = allEvents.filter(ev => ev.city == id)
    /* console.log(data)
    console.log(id) */
    return{
        props: {
            data, pageName: id
        }
    }
}