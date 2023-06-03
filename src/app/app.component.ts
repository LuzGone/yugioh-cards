import { Component } from '@angular/core';
import { YuCard } from 'src/shared/model/yucard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yugioh-cards';
  yuCard:YuCard;
  cards:YuCard[];
  tipos:string[]=['Aqua','Demônio','Dragão','Besta','Besta Alada', 'Guerreiro', 'Máquina','Planta','Piro','Rocha','Trovão','Zumbi','Ciberso','Mago','Dinossauro','Fada','Besta-Guerreira','Besta Divina','Inseto','Peixe','Psíquico','Réptil','Serpente Marinha','Wyrm','Deus Criador'];
  atributos:string[]=['Água','Fogo','Luz','Terra','Trevas','Vento','Divino'];
  isEditing:boolean = false;
  constructor(){
    this.yuCard = new YuCard();
    this.cards = [];
  }

  addCard(){
    if(!this.isEditing){
      this.cards.push(this.yuCard);
    }
    this.yuCard = new YuCard();
    this.isEditing = false;
  }

  listCards(){
    return this.cards
  }

  editCard(nome:string){
      const index:number = this.cards.findIndex(yuCard=>yuCard.nome==nome);
      this.yuCard = this.cards[index];
      this.isEditing = true
  }

  deleteCard(nome:string){
    const index:number = this.cards.findIndex(yuCard=>yuCard.nome==nome);
    this.cards.splice(index,1);
  }


}

