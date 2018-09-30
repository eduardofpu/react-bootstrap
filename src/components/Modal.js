import React from 'react';

export default class Modal extends React.Component{
    render(){
        return (
        <div>  
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ExemploModalCentralizado">
            Abrir modal de demonstração
            </button>
        
            <div className="modal fade" id="ExemploModalCentralizado" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="TituloModalCentralizado">Título do modal</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                   <h1>Modal</h1>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    <button type="button" className="btn btn-primary">Salvar mudanças</button>
                </div>
                </div>
            </div>
            </div>
          </div>        
        );
    }
}