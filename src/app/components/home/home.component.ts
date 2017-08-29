import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../../services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photos: Photo[];
  togglePhotoView: boolean = false;
  photoBeingToggled: object = null;

  constructor(private PhotoService: PhotoService) { }

  ngOnInit() {
     this.PhotoService.loadPhotos().subscribe(photos => {
       this.photos = photos.splice(0, 21);
     })
  }

  openPhoto(photoId: number): void {
    this.togglePhotoView = true;
    this.photoBeingToggled = this.photos.filter(photo => photo.id === photoId)[0];
  }

  closePhoto() {
    this.togglePhotoView = false;
    this.photoBeingToggled = null;
  }

}

interface Photo {
  albumID: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}