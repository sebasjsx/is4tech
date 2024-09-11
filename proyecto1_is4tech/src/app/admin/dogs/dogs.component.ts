import { Component, OnInit } from '@angular/core';
import { DogsService } from '../services/dogs.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dogs-img',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  text: string = '';
  
  dogImageUrl: string = '';

  constructor(private dogsService: DogsService) { }

  ngOnInit(): void {
    this.getImage();
  }

  getImage(): void {
    this.dogsService.getDog().subscribe(response => {
      this.dogImageUrl = response.message;
    });
  }

  updateImg(): void {
    this.getImage();
  }

  onTextChanged(text: string): void {
    console.log(text);
    this.text = text;
  }
}