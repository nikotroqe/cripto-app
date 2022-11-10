import { Component } from '@angular/core';
import { crypto } from './list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'detyra2';
 
  cryptoItem!: crypto;
  buyValue: number = 0;
  cryptoName!: string;
  sellValue: number = 0;


  addCryptoItem(item: crypto): void{
    this.cryptoItem = item;
  }

  addBuyValue(value: number):void {
    this.buyValue = value;
    setTimeout(() => this.buyValue = 0, 300)
  }

  addSellValue(value: number): void{
    this.sellValue = value
    setTimeout(() => this.sellValue = 0, 300)
    
  }

  addCryptoName(name: string){
    this.cryptoName = name
    setTimeout(() => this.cryptoName = '', 300)
  }
}
