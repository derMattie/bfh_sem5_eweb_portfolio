import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CountUp } from 'countup.js';

@Component({
  selector: 'app-number-counter',
  standalone: true,
  imports: [],
  templateUrl: './number-counter.component.html',
  styleUrl: './number-counter.component.scss',
})
export class NumberCounterComponent {
  @Input() targetNumber!: number;
  @Input() startNumber: number = 0;
  @Input() duration: number = 3;
  @Input() grouping: boolean = false;

  @ViewChild('counterElement', { static: true }) counterElement!: ElementRef;

  ngAfterViewInit() {
    const targetNumber = this.targetNumber;
    const countUp = new CountUp(
      this.counterElement.nativeElement,
      targetNumber,
      {
        duration: this.duration, // Set the duration for the counting animation (in seconds)
        startVal: this.startNumber, // Starting value
        useEasing: true, // Smooth animation
        useGrouping: this.grouping, // 1'000 vs 1000
      }
    );

    if (!countUp.error) {
      countUp.start(); // Start the counter
    } else {
      console.error(countUp.error); // Handle potential errors
    }
  }
}
