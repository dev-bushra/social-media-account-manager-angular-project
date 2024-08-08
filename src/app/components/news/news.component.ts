import { News } from './../../models/news.interface';
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

  ngOnInit(): void { }



  // GET All News
  seeNewNews() {
    this.newsService.getNews().subscribe({
      next: (data: News[]) => {
        this.localNewsVar = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  // POST New News
  post(title: string, body: string) {
    const newNews: News = { title: title, body: body };

    this.newsService.postNews(newNews).subscribe({
      next: (response: News) => {
        alert('Successfully postin news');
        this.seeNewNews();
      },
      error: (error) => { alert('Failed to post news') }
    })
  }
}
