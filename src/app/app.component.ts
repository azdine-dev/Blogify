import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  posts = [
    {
      title      :  'My First Post ',
      content    :  'Lorem ipsum dolor sit amet, consectetur adipiscing elit,'+
                    'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',

      created_at :  new Date("2019-01-16")
    },
    {
      title      :  'My Second Post',
      content    :  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'+
                    'consequat. Duis aute irure dolor in reprehenderit'+
                    'in voluptate velit esse cillum dolore eu fugiat nulla pariatur',

      created_at :  new Date("2020-07-15")
    },
    {
      title      :  'My Third Post',
      content    :  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum'+
                    'dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'+
                    ',sunt in culpa qui officia deserunt mollit anim id est laborum.',

      created_at :  new Date("2020-01-01")
    }
  ]
}
