import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ["code.jpg", "design.jpg", "keyboard.jpg"];
  currentImage = 0; 
  showImage = true;

  ngOnInit(){
    this.updateImage();
  }



  updateImage() {
    setInterval(() =>{
      this.currentImage = (this.currentImage + 1) % this.images.length;
    this.showImage = false; 

    setTimeout(() => {
      this.showImage = true;
    }, 1);
    }, 5000)
  }




}
