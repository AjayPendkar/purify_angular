import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { AnimatedCardComponent } from '../../shared/components/animated-card/animated-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, AnimatedCardComponent],
  template: `
    <div class="grid-container">
      <app-animated-card
        *ngFor="let item of items"
        [feature]="item">
      </app-animated-card>
    </div>
  `,
  styles: [`
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      padding: 1rem;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    }
  `]
})
export class HomeComponent {
  items = [
    {
      imageUrl: 'https://picsum.photos/300/200',
      title: 'Card 1',
      description: 'This is a sample card with animation',
      position: 'left' as 'left' | 'right'
    },
    {
      imageUrl: 'https://picsum.photos/300/201',
      title: 'Card 2',
      description: 'Another sample card with hover effects',
      position: 'right' as 'left' | 'right'
    },
    {
      imageUrl: 'https://picsum.photos/300/202',
      title: 'Card 3',
      description: 'Yet another animated card example',
      position: 'left' as 'left' | 'right'
    }
  ];
} 