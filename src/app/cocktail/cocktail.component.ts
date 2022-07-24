import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {
  public serverName: string = '';
  public serverDescription: string = '';
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverDescription: string }>();
  @Output() serverBluePrintCreated = new EventEmitter<{ serverName: string, serverDescription: string }>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickServer() {
    this.serverCreated.emit({
      serverName: this.serverName,
      serverDescription: this.serverDescription
    });
  }

  onClickServerBluePrint() {
    this.serverBluePrintCreated.emit({
      serverName: this.serverName,
      serverDescription: this.serverDescription
    });
  }

  clearFormInputs() {
    this.serverName = '';
    this.serverDescription = '';
  }
}
