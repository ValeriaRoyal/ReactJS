import React from 'react';
import Comment from './Comment';

/*Post é como se fosse um feedback */

/*Exportando a classe POST que extende o componente padrão do REACT */
export default class Post extends React.Component {
    constructor(props) { //criar novos comentarios cada vez que o metodo post for instanciado
        super(props); //repassar as propriedade que vem do post p/ a classe pai que tratará as propriedades

        //Estado do Post 
        //Todas as variaveis serão gravadas neste estado
        this.state = {
            comments:[],//comentarios são adc ao estado e guardados como obj
            newCommentText:''
        };

        this.hadleSubmit = this.hadleSubmit.bind(this);
        this.hadleTextChange = this.hadleTextChange.bind(this);
    }
    hadleSubmit(e){
        this.setState({
            comments: [
                ...this.state.comments,
                {text: this.state.newCommentText}
            ]
        });

        this.setState({newCommentText: ''});   

        e.preventDefault();
    }

    hadleTextChange(e){
        this.setState({ newCommentText: e.target.value })
    }

    render(){
        return(
            <div>
                <h2>{this.props.title}</h2> {/* acessa as propriedades do componente ex.: title */ }
                <form onSubmit={this.hadleSubmit}> 
                    <input 
                        value={this.state.newCommentText} 
                        onChange={this.hadleTextChange} 
                    />
                    <button type="submit"> Comentar </button>
                </form>
                {this.state.comments.map((comment, index)=>{ //map percorre este estado de comentarios
                    return <Comment key={index} text={comment.text} />
                })}
            </div>
        );
    }
}