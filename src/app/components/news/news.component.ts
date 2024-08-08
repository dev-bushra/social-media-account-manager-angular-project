import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit {

  localNewsVar: any[] = []

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {}

  seeNewNews() {
    this.newsService.getNews().subscribe(data => {
      this.localNewsVar = data
    })
  }

}
