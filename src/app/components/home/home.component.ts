import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photos: Photo[]

  constructor() { }

  ngOnInit() {

  }

}

interface Photo {
  albumID: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}