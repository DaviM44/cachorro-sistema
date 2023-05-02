import { Component, OnInit } from '@angular/core';
import { Dog } from '../cao';
import { DogService } from './../dog.service';

@Component({
  selector: 'app-cao',
  templateUrl: './cao.component.html',
  styleUrls: ['./cao.component.css']
})
export class CaoComponent implements OnInit {

dog : Dog = {} as Dog;

constructor(private service : DogService){}

ngOnInit(): void {
  this.loadDog();
}

loadDog(){
  this.service.getDog().subscribe(
  {next : data => this.dog = data})
}

getBreed(): string[]  {
  return this.dog.message.split("/")[4].split("-");
}

}

