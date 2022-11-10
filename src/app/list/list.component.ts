import { Component, Input,Output, OnChanges, OnInit, SimpleChanges, EventEmitter } from '@angular/core';

export interface crypto{
  id: number;
  name: string;
  value: number;
  arrow: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {

   cryptos:  crypto[] = [
    {id: 1,name:"Bitcoin", value: 388, arrow: 0},
    {id: 2,name:"Ethereum", value: 187, arrow: 0},
    {id: 3,name:"Binance Coin", value: 69, arrow: 0},
    {id: 4,name:"Tether", value: 52, arrow: 0},
    {id: 5,name:"Solana", value: 42, arrow: 0},
    {id: 6,name:"Cardano", value: 22, arrow: 0},
    {id: 7,name:"XRP", value: 21, arrow: 0},
    {id: 8,name:"USD Coin", value: 16, arrow: 0},
    {id: 9,name:"Terra", value: 13, arrow: 0},
    {id: 10,name:"Polkadot", value: 11, arrow: 0}
  ];

  @Input() cryptoName!: string;
  @Input() buyValue: number = 0;
  @Input() sellValue: number = 0;
  @Output() cryptoItem: EventEmitter<crypto> = new EventEmitter<crypto>();

  
emitCryptoItem(item: crypto): void{
this.cryptoItem.emit(item)
}
  

 constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void{
    if (this.cryptoName) {
      for(let i=0 ; i< this.cryptos.length ; i++){
        if(this.cryptos[i].name === this.cryptoName){
          this.cryptos[i].value = this.cryptos[i].value + this.buyValue
          this.buyValue = 0
  
          this.cryptos[i].value = this.cryptos[i].value - this.sellValue
          this.sellValue = 0
          
           if(changes['buyValue']){
            this.cryptos[i].arrow = 2
           }else if(changes['sellValue']){
            this.cryptos[i].arrow = 1;
           }else {
            this.cryptos[i].arrow = 0
           }
        }
      } 
    } 
  }
}
  
