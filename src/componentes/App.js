import React from 'react';
import Post from './Post';

export default class App extends React.Component {
    /* Render é resposalvel pelo retorno do conteudo HTML deste componente. */
    render(){ 
        return(
            /* Para não dar erro é usado um conteiner por fora dos componentes*/
            <div> 
                <h1>Hello Word</h1>
                <Post title="Aprendendo ReactJS"/> {/*title é uma propriedade do elemento*/} 
                <Post title="Aprendendo ReactJS"/>
                <Post title="Aprendendo ReactJS"/>
            </div>
        );
    }
}