import { Component, Input, ElementRef, ViewChild, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-animated-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card" #card>
      <div class="card-content">
        <img [src]="feature.icon" [alt]="feature.title" class="icon">
        <div class="text">
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @keyframes zoomIn {
      0% {
        opacity: 0;
        transform: scale(02);
      }
      100% {
        opacity: 1;
        transform: scale(0.9);
      }
    }

    @keyframes zoomOut {
      0% {
        opacity: 1;
        transform: scale(3);
      }
      100% {
        opacity: 0;
        transform: scale(0.9);
      }
    }

    .card {
      background: white;
      padding: 1rem;
      border-radius: 1rem;
      box-shadow: 0 8px 20px rgba(0,0,0,0.05);
      width: 350px;
      height: 73px;
      opacity: 0;
      transform: scale(0.85);
      transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
      margin: 0rem; /* Added margin for spacing between cards */
    }

    .card.visible {
      opacity: 1;
      animation: zoomIn 0.8s forwards; /* Zoom in effect */
    }

    .card.hidden {
      animation: zoomOut 0.8s forwards; /* Zoom out effect */
    }

    .card:hover {
      transform: translateY(-15px) scale(1.05);
      box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    }

    .card-content {
      display: flex;
      align-items: center;
      gap: 1rem;
      height: 100%;
    }

    .icon {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }

    .text {
      text-align: left;
      h3 {
        font-size: 1.1rem;
        font-weight: 500;
        color: #1E1E1E;
        margin-bottom: -0.7rem;
      }

      p {
        font-size: 0.9rem;
        font-weight: 400;
        color: #8E8E93;
        line-height: 1;
      }
    }
  `]
})
export class AnimatedCardComponent implements AfterViewInit {
  @Input() feature: any;
  @ViewChild('card') card!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden'); // Remove hidden class
          } else {
            entry.target.classList.remove('visible');
            entry.target.classList.add('hidden'); // Add hidden class for zoom out
          }
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      );

      observer.observe(this.card.nativeElement);
    } else {
      // For SSR, show content immediately
      this.card.nativeElement.classList.add('visible');
    }
  }
}