import { Component, OnInit, ViewEncapsulation, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TableComponent implements OnInit, AfterViewInit {

  @Input() myCustomPlaceholder: string; // my-custom-placeholder
  @Input() myButtonLabel: string;
  @Input() myRows: any[];

  @Output() changeIt = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.myButtonLabel, 'Input obtained on Init');
  }

  connectedCallback() {
    console.log(this.myButtonLabel, 'Input obtained on ConnectedCallback');
  }

  ngAfterViewInit() {
    console.log(this.myButtonLabel, 'Input obtained on AfterViewInit');
  }

  clickMe() {
    this.changeIt.emit('Clicked!');
  }

  inspect() {
    console.log(this.myRows);
  }
}
