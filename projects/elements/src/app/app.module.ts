import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { InputComponent, ButtonComponent, TableComponent, RowComponent } from './components';

const COMPONENTS = [
  { component: ButtonComponent, tag: 'wc-button' },
  { component: InputComponent, tag: 'wc-input' },
  { component: TableComponent, tag: 'wc-table' },
];

@NgModule({
  declarations: [
    TableComponent,
    RowComponent
  ],
  imports: [
    BrowserModule
  ]
})
export class AppModule {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    COMPONENTS.forEach(comp => {
      const element = createCustomElement(comp.component, { injector: this.injector });
      customElements.define(comp.tag, element);
    });
  }
}
