import {Component, OnInit, Output,Input, EventEmitter, OnChanges } from '@angular/core';
import { crypto } from '../list/list.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges{

  @Output() buyValue: EventEmitter<number> = new EventEmitter<number>()
  @Output() sellValue: EventEmitter<number> = new EventEmitter<number>()
  @Input() amount!: number;
  @Input() cryptoItem!: crypto;
  @Output() cryptoName: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  emitBuyValue(): void{
    this.buyValue.emit(this.amount)
    this.amount = 0
    this.cryptoName.emit(this.cryptoItem.name)
    }
    
    emitSellValue(): void{
      this.sellValue.emit(this.amount)
      this.amount = 0
      this.cryptoName.emit(this.cryptoItem.name)
      }
  ngOnChanges(): void{
    
  }

  
}
