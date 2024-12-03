import { injectContent, MarkdownComponent } from '@analogjs/content';
import { Component } from '@angular/core';
import { PostAttributes } from './index.page';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-blog-post',
    standalone: true,
    imports: [CommonModule, MarkdownComponent],
    template: `
    @if (post$ | async; as post) {
<div class="content">
    <analog-markdown [content]="post.content"></analog-markdown>
</div>
    }
  `,
    styles: ``
})
export default class HomeComponent {

    readonly post$ = injectContent<PostAttributes>({
        param: 'slug',
        subdirectory: 'posts'
    })

}
