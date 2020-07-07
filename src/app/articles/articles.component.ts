import { SharedService } from './../shared.service';
import { ArticleService } from './../article.service';
import { ARTICLES } from './../mock-articles';
import { Article } from './../article';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];

  constructor(private articleService: ArticleService,
              private titleService: Title,
              private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    // this.articles = ARTICLES;

    // console.log(this.articles);
    this.getArticles();
    this.titleService.setTitle(`${this.sharedService.blogTitle}`);
  }

  getArticles(): void {
    this.articleService
      .getArticles()
      .subscribe((articles) => (this.articles = articles));
  }
}
