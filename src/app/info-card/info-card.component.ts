import { Component, Input, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faImage, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss',
})
export class InfoCardComponent {
  readonly faInputIcon = input.required<IconDefinition>();
}
