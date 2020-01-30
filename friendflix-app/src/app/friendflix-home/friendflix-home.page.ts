import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friendflix-home',
  templateUrl: './friendflix-home.page.html',
  styleUrls: ['./friendflix-home.page.scss'],
})
export class FriendflixHomePage implements OnInit {

  constructor() { }
  	//Post Page atributos
  dadosPost:object ={
  	"nomeDoUsuario":'Gabriel',
  	"comentario":'Entre razões emoções, a saída,é fazer valer a pena!',
  	"horario":'14:43',
  	"titulo":'Post',
  	"curtirDiscurtir":{
  	"botaoLike":false,
  	"botaoDislike":false,
  	"quantidadeLike":15,
  	"quantidadeDislike":25,
		}
	}



// like_star(quantidadeLike:number, quantidadeDislike:number):string {
// 	if (quantidadeLike > quantidadeDislike){
// 		return 'success';
// 	}
// 	else if (quantidadeDislike > quantidadeLike) {
// 		return 'danger';
// 	}
//   else (quantidadeLike = quantidadeDislike){
//     return 'medium';
//   }
// }
  like(dadosPost){
  if (this.dadosPost.curtirDiscurtir.botaoLike) {
  this.dadosPost.curtirDiscurtir.quantidadeLike--;

 }
  else{
  this.dadosPost.curtirDiscurtir.quantidadeLike++;
 }  
  this.dadosPost.curtirDiscurtir.botaoLike = !this.dadosPost.curtirDiscurtir.botaoLike;
  this.dadosPost.curtirDiscurtir.botaoDislike = false;

}
unlike(dadosPost){
  if (this.dadosPost.curtirDiscurtir.botaoLike) {
  this.dadosPost.curtirDiscurtir.quantidadeLike--;

 }
  else{
  this.dadosPost.curtirDiscurtir.quantidadeDislike++;
 }  
  this.dadosPost.curtirDiscurtir.botaoDislike = !this.dadosPost.curtirDiscurtir.botaoDislike;
  this.dadosPost.curtirDiscurtir.botaoLike = false; 

}
	 
  ngOnInit() {
}

}
