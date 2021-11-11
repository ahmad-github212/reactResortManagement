
/*import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsFilter'
import { withRoomConsumer } from '../context';
import Loading from './Loading' ;

function RoomContainer({context}){
const {loading, sortedRooms, rooms}  = context ;
console.log(rooms) ;
 if(loading){
     console.log(rooms);
        return  <Loading />;
        }
        return (
                 <div>
                  Hello from rooms container
                 <RoomsFilter rooms= {rooms} />
                 <RoomsList rooms={sortedRooms}/>
                </div>
                 ) ;

}
export default withRoomConsumer(RoomContainer) ;
*/

import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { RoomConsumer } from '../context';
import Loading from './Loading' ;

export default function RoomsContainer() {
    
    return (
           
        <RoomConsumer>
            {
                (value) =>{
                     const {loading, sortedRooms, rooms} = value ;
                     //console.log(sortedRooms) ;
                     //console.log(rooms);
                     if(loading){
                        return  <Loading />;
                     }
                    return (
                        <>
                        
                         <RoomsFilter rooms= {rooms} />
                          <RoomsList rooms={sortedRooms}/>
                       
        </>
                    )
                }
            }
        </RoomConsumer>
        
    )
}
