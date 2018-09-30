import React from 'react';

export default class Nave extends React.Component{    

    render(){
       return ( 
     <div>x
        <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h5 className="text-white h4">Conteúdo expandido</h5>
            <span className="text-muted">Expansível, atráves da marca no navbar.</span>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Alterna navegação">
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
     </div>  
         
       );
    }

}