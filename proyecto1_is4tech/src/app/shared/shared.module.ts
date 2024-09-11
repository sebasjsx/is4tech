import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhiteSpaceDirectiveDirective } from './directives/white-space-directive.directive';
import { WhiteSpaceDirective } from './directives/white-space.directive';



@NgModule({
  declarations: [
    WhiteSpaceDirectiveDirective,
    WhiteSpaceDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
