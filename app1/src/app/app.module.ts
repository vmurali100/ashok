import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ParentComponent } from './ParentToChild/parent/parent.component';
import { ChildComponent } from './ParentToChild/child/child.component';
import { Parent1Component } from './ChildToParent/parent1/parent1.component';
import { Child1Component } from './ChildToParent/child1/child1.component';
import { CompAComponent } from './SiblingCoponents/comp-a/comp-a.component';
import { CompBComponent } from './SiblingCoponents/comp-b/comp-b.component';

@NgModule({
  declarations: [AppComponent, ParentComponent, ChildComponent, Parent1Component, Child1Component, CompAComponent, CompBComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
