import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'groceryshop';

  groceries = [
    { name: 'Milk', cost: 2.99 },
    { name: 'Bread', cost: 1.99 },
    { name: 'Eggs', cost: 3.99 },
    { name: 'Oranges', cost: 1.49 },
    { name: 'Apples', cost: 1.99 }
  ];

  ngOnInit() {
  }
}


