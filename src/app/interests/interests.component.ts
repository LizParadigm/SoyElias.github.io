import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent {
  interests: Array<any> = [];

  ngOnInit(): void {
    let interes1 = {
      nombre: "ia"
    };
    let interes2 = {
      nombre: "musica"
    };
    let interes3 = {
      nombre: "fantasia"
    };
    let interes4 = {
      nombre: "jojo"
    };
    let interes5 = {
      nombre: "programacion"
    };

    this.interests.push(interes1);
    this.interests.push(interes2);
    this.interests.push(interes3);
    this.interests.push(interes4);
    this.interests.push(interes5);

  }
}
