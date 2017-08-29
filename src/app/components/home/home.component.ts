import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../../services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photos: Photo[]

  constructor(private PhotoService: PhotoService) { }

  ngOnInit() {
     this.PhotoService.loadPhotos().subscribe(photos => {
       this.photos = photos.splice(0, 20);
     })
  }

}

interface Photo {
  albumID: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}