import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-career-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './career-card.component.html',
  styleUrl: './career-card.component.scss',
})
export class CareerCardComponent {
  @Input() title!: string;
  // @Input() startDate!: Date;
  // @Input() endDate!: Date;
  @Input() organisation!: string;
  @Input() location: string = 'N/A';
}
