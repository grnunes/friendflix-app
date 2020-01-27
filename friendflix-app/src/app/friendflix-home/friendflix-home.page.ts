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
  	nome_do_usuario:'Gabriel',
  	comentario:'Entre razões emoções, a saída,é fazer valer a pena!',
  	horario:'14:43',
  	titulo:'Post',
  	Curtir_Discurtir:{
  		botão_like:true,
  		botão_dislike:false,
  		quantidade_like:15,
  		quantidade_dislike:15,
		}
	}

like_star(quantidade_like:number, quantidade_dislike:number):string {
	if (quantidade_like > quantidade_dislike){
		return 'success';
	}
	else if (quantidade_dislike > quantidade_like) {
		return 'danger';
	}
	else {
		return 'light';
	}
}
	 
  ngOnInit() {
  }

}
