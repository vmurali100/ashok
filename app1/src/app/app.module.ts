import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ParentComponent } from "./ParentToChild/parent/parent.component";
import { ChildComponent } from "./ParentToChild/child/child.component";
import { Parent1Component } from "./ChildToParent/parent1/parent1.component";
import { Child1Component } from "./ChildToParent/child1/child1.component";
import { CompAComponent } from "./SiblingCoponents/comp-a/comp-a.component";
import { CompBComponent } from "./SiblingCoponents/comp-b/comp-b.component";
import { MyformComponent } from "./Forms/myform/myform.component";
import { ShowUsersComponent } from "./show-users/show-users.component";
import { ModuleDrivenComponent } from "./Forms/module-driven/module-driven.component";

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child1Component,
    CompAComponent,
    CompBComponent,
    MyformComponent,
    ShowUsersComponent,
    ModuleDrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
