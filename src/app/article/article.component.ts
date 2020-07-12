import { SharedService } from './../shared.service';
import { ArticleService } from './../article.service';
import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: Article = undefined;
  constructor(private route: ActivatedRoute,
              private articleService: ArticleService,
              private router: Router,
              private titleService: Title,
              private sharedService: SharedService,
              private meta: Meta) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const key = params.key;
      this.articleService.getArticle(key).subscribe(article => {
        if ( article === undefined) {
          this.router.navigateByUrl('404');
        }
        this.article = article;
        this.titleService.setTitle(`${this.article.title} - ${this.sharedService.blogTitle}`);
        this.meta.addTags([
          { name: 'description', content: this.article.description },
          { property: 'og:title', content: `${this.article.title} - ${this.sharedService.blogTitle}` },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: this.sharedService.baseUrl + this.article.key},
          { property: 'og:image', content: this.article.imageUrl},
          { property: 'og:description', content: this.article.description},
          { property: 'og:site_name', content: this.sharedService.blogTitle}
        ]);
      });
  });

  }

}
