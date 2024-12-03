import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
  <div class="text-center">
    <h1>Welcome to Habeeb's Blog</h1>
    <a href="/blog">Visit my blog</a>
  </div>
  `,
  styles:``
})
export default class HomeComponent {
  
}
