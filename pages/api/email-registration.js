import path from 'path'
import fs from 'fs'

function buildPath(){
    return path.join(process.cwd(), 'data', 'data.json') //cwd: current working directory
}

function extractData(filePath){
    const jsonData = fs.readFileSync(filePath)
    const data = JSON.parse(jsonData) //JSON.parse converts the JSON file it recieves into JS object
    return data
}


export default function handler(req, res){
    const {method} = req;
    //access our data
    //extract our data (allEvents)
        //response 404 if there are no AllEvents
        //"allEvents" - loop through them and identify the eventID
            //add the emai into email_registered -> write on our data
                //only if this email doesnt exist
                //check the format of the email is ok    
    const filePath = buildPath()    
    const {events_categories, allEvents} = extractData(filePath)
    if(!allEvents){
        return res.status(404).json({
            status: 404,
            message: 'Events data not found' 
        })
    }
    if(method === 'POST'){
        //we add our code here    
        const {email, eventId} = req.body
        if(!email || !email.includes('@')){
            res.status(422).json({
                message: 'invalid email address'                
            })
            return
        }            
        const newAllEvents = allEvents.map(ev => {
            if(ev.id === eventId){
                if(ev.emails_registered.includes(email)){
                    res.status(409).json({
                        message: 'this email has already been registered'
                    })
                    return ev
                }
                return{
                    ...ev, emails_registered: [...ev.emails_registered, email]
                }
            }
            return ev;
        })
        fs.writeFileSync(filePath, JSON.stringify({events_categories, allEvents: newAllEvents}))
        res.status(200).json({message: `You have been registered succesfully wioth the email: ${email} to event ${eventId} `})
    }

  /*   if(method === 'GET'){}
    //Based on the kind of method different logics are executed
     */
}