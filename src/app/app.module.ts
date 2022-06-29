import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { BindingPracticeComponent } from './binding-practice/binding-practice.component';
import { FormsModule } from '@angular/forms';
import { SizerComponent } from './sizer/sizer.component';
import { DirectivePracticeComponent } from './directive-practice/directive-practice.component';
import { LiginComponent } from './ligin/ligin.component';
import { TestClass } from './person';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonListComponent,
    BindingPracticeComponent,
    SizerComponent,
    DirectivePracticeComponent,
    LiginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{
    provide:"MyToken",
    useValue:123
  },{
    provide: "MyTest",
    useClass:TestClass
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
