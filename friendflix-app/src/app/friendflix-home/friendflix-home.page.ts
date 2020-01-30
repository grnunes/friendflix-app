import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friendflix-home',
  templateUrl: './friendflix-home.page.html',
  styleUrls: ['./friendflix-home.page.scss'],
})
export class FriendflixHomePage implements OnInit {

  constructor() { }
  	//Post Page atributos
  dadosPost:any =[{
  	"nomeDoUsuario":'Gabriel',
  	"comentario":'Entre razões emoções, a saída,é fazer valer a pena!',
  	"horario":'14:43',
  	"titulo":'Post',
    "spoiler":true,
  	"curtirDiscurtir":{
    	"botaoLike":false,
    	"botaoDislike":false,
    	"quantidadeLike":15,
    	"quantidadeDislike":25,
		},
	},
{
  "nomeDoUsuario":'Valeria',
  "comentario":'COMO ZAQUEEEU, EU QUERO SUBIRRR!!!',
  "horario":'15:38',
  "titulo":'Post',
  "spoiler":true,
  "curtirDiscurtir":{
    "botaoLike":false,
    "botaoDislike":false,
    "quantidadeLike":15,
    "quantidadeDislike":25,
  },
}

]


/*
like_star(quantidadeLike:number, quantidadeDislike:number):string {
 	if (quantidadeLike > quantidadeDislike){
		return 'success';
	}
	else if (quantidadeDislike > quantidadeLike) {
		return 'danger';
	}
  else (quantidadeLike = quantidadeDislike){
    return 'medium';
  }
}
  like(post){
  if (post.curtirDiscurtir.botaoLike) {
  post.curtirDiscurtir.quantidadeLike--;

 }
  else{
  post.curtirDiscurtir.quantidadeLike++;
 }
  post.curtirDiscurtir.botaoLike = !post.curtirDiscurtir.botaoLike;
  post.curtirDiscurtir.botaoDislike = false;

}
unlike(post){
  if (post.curtirDiscurtir.botaoLike) {
  post.curtirDiscurtir.quantidadeDislike--;

 }
  else{
  post.curtirDiscurtir.quantidadeDislike++;
 }
  post.curtirDiscurtir.botaoDislike = !post.curtirDiscurtir.botaoDislike;
  post.curtirDiscurtir.botaoLike = false;

}
*/

  like(post){
      if(post.curtirDiscurtir.botaoDislike == true){
          post.curtirDiscurtir.quantidadeDislike -= 1;
          post.curtirDiscurtir.botaoDislike = false;
          post.curtirDiscurtir.quantidadeLike += 1;
          post.curtirDiscurtir.botaoLike = true;
      }
      else if(post.curtirDiscurtir.botaoLike == false){
          post.curtirDiscurtir.quantidadeLike += 1;
          post.curtirDiscurtir.botaoLike = true;
      }
      else if(post.curtirDiscurtir.botaoLike == true){
          post.curtirDiscurtir.quantidadeLike -= 1;
          post.curtirDiscurtir.botaoLike = false;
      }
  }
  unlike(post){
      if(post.curtirDiscurtir.botaoLike == true){
          post.curtirDiscurtir.quantidadeLike -= 1;
          post.curtirDiscurtir.botaoLike = false;
          post.curtirDiscurtir.quantidadeDislike += 1;
          post.curtirDiscurtir.botaoDislike = true;
      }
      else if(post.curtirDiscurtir.botaoDislike == false){
          post.curtirDiscurtir.quantidadeDislike += 1;
          post.curtirDiscurtir.botaoDislike = true;
      }
      else if(post.curtirDiscurtir.botaoDislike == true){
          post.curtirDiscurtir.quantidadeDislike -= 1;
          post.curtirDiscurtir.botaoDislike = false;
      }

  }
  tiraSpoiler(post){
      post.spoiler = false;
  }
  ngOnInit() {
}

}
