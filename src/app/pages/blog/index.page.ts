import { injectContentFiles } from '@analogjs/content';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface PostAttributes{
    title: string,
    date: string,
    description: string
}

@Component({
    selector: 'app-blog',
    standalone: true,
    imports: [RouterModule],
    template: `
    <h1>Welcome to my blog page</h1>
    <div class="blog">
        @for (post of posts; track post) {
            <div class="card" routerLink="/blog/{{post.slug}}">
                <div class="title">
                <h2>{{post.attributes.title}}</h2>
                <p>{{post.attributes.date}}</p>
                </div>
                <h4>{{post.attributes.description}}</h4>
            </div>
        }
    </div>
    `,
    styles: ``,
})
export default class HomeComponent {

    readonly posts = injectContentFiles<PostAttributes>()
    
}
