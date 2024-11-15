import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-career-card',
  standalone: true,
  imports: [],
  templateUrl: './career-card.component.html',
  styleUrl: './career-card.component.scss',
})
export class CareerCardComponent {
  @Input() isLast: boolean = false;

  @Input() title!: string;
  @Input() startDate!: string;
  @Input() endDate!: string;
  @Input() organisation!: string;
  @Input() location: string = 'N/A';
}
