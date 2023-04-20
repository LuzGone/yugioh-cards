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

  constructor(){
    this.yuCard = new YuCard();
    this.cards = [];
  }

  addCard(){
    this.cards.push(this.yuCard);
    this.yuCard = new YuCard();
  }

  listCards(){
    return this.cards
  }

  editCard(nome:string){
      const index:number = this.cards.findIndex(yuCard=>yuCard.nome==nome);
      this.yuCard = this.cards[index];
  }

  deleteCard(nome:string){
    const index:number = this.cards.findIndex(yuCard=>yuCard.nome==nome);
    this.cards.splice(index,1);
  }


}
