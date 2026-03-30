import { Component, signal } from '@angular/core';
import { producerAccessed } from '@angular/core/primitives/signals';
import { RouterOutlet } from '@angular/router';
import { Resturant } from './resturant/resturant';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Resturant],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  
})
export class App {
  title = 'angular1';   

}






