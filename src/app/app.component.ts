import { MatFormField } from '@angular/material/form-field';
import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-interview';
  @ViewChild(MatAccordion, null) accordion: MatAccordion;
  @ViewChild(MatFormField, null) formField: MatFormField;
}
