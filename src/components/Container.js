import React from 'react';
import Nave from './Nave';
import Table from './Table';
import Modal from './Modal';

export default class Container extends React.Component{    

    render(){
       return  (

            <div>
            <div>
            <Nave/>
            </div>

            <div>
            <Table/>
            </div>

            <div>     
            <Modal/>
            </div> 

            </div>  
        
      
       
       );  

   }

}