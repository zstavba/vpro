import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-article-home',
  templateUrl: './article-home.component.html',
  styleUrls: ['./article-home.component.scss']
})
export class ArticleHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showRole = () => {
    $('.createRole').fadeIn();
  }

}
