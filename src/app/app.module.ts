import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { MemberDetailComponent } from './member-detail.component'

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MemberDetailComponent //デコレーションを伝える(@Inputによって伝えることができている？)=コンポーネントを使いますよと宣言する。app.componentでmemberdetailが使えるようになる。
  ],
  bootstrap:    [
    AppComponent
  ]
})
export class AppModule { }
