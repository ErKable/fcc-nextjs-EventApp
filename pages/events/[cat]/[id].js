import SingleEvent from '@/src/components/events/single-event';
//This is a dynamic page, it defines the structure and then
//the data are displayed in it according to the fetched one
//To define a dynamic page its name must be in square brakets 
const EventPage = ({data}) => <SingleEvent data={data} />

export default EventPage;

export async function getStaticPaths(){
    const data = await import('/data/data.json')
    //console.log("DATA",data)
    const {allEvents} = data;

    const allPaths = allEvents.map(path => {
        return{
            params: {
                cat: path.city,
                id: path.id, //this param has the name of the page-file [id]
                }
            }
        })
    return{
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context){    
    console.log(context)
    const id = context.params.id
    const {allEvents} = await import('/data/data.json')
    const eventData = allEvents.find(ev => (
        id == ev.id
    ))
    return{
        props:{
            data: eventData
        }
    }
}