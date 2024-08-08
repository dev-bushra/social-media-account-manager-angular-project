import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../models/news.interface';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  // News EndPoint
  url = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  // GET News
  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.url)
  }

  // POST New
}
