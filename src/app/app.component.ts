import { Component, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AnimatedCardComponent } from './shared/components/animated-card/animated-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AnimatedCardComponent],
  template: `
    <header>
      <nav>
        <img src="/assets/images/logo.png" alt="Purify" class="logo">
        <div class="nav-links">
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">Contact us</a>
          <a href="#">Newsletter</a>
          <button class="get-started">Get Started</button>
        </div>
      </nav>
    </header>
    <main>
      <section class="hero" style="padding-bottom: 2rem;">
        <h1>Your Path to Holistic Wellness <span>Starts Here</span></h1>
        <p>Discover personalized yoga, diet plans, and wellness solutions tailored just for you.</p>
        <div class="store-buttons">
          <a href="#" class="store-button">
            <div class="button-content">
              <img src="/assets/images/apple-icon.png" alt="" class="store-icon">
              <span>Apple Store</span>
            </div>
          </a>
          <a href="#" class="store-button">
            <div class="button-content">
              <img src="/assets/images/google-play-icon.png" alt="" class="store-icon">
              <span>Google Play</span>
            </div>
          </a>
        </div>
      </section>
      <section class="app-preview" style="background-image: url('/assets/images/heroBG.png')">
        <div class="phone-container">
          <div class="phone-frame">
            <img src="/assets/images/app-screen-1.png" alt="App Preview">
          </div>
          <div class="phone-frame">
            <img src="/assets/images/app-screen-2.png" alt="App Preview">
          </div>
          <div class="phone-frame">
            <img src="/assets/images/app-screen-3.png" alt="App Preview">
          </div>
        </div>
      </section>
      <div class="padding-container" style="padding: 2rem;">
        <div class="empty-container"></div>
      </div>

      
      <section class="features" style="background-color: #F5F8F6; padding: 2rem; border-radius: 1rem;">
        <div class="features-header">
          <h2 style="font-family: 'Manrope', sans-serif; font-weight: 400; font-size: 20px; color: #517B65; margin-bottom: 0.5rem;">What We Offer</h2>
          <h2 style="font-family: 'Manrope', sans-serif; font-weight: 600; font-size: 36px; color: #517B65; margin-bottom: 0.5rem;">Wellness at Your Fingertips!</h2>
          <p style="font-family: 'Manrope', sans-serif; font-weight: 600; font-size: 18px; color: #8E8E93; margin-top: 0; margin-bottom: 1rem;">Explore our thoughtfully designed features to elevate your health and lifestyle.</p>
        </div>

        <div class="padding-container" style="padding: 3rem;">
        <div class="empty-container"></div>
      </div>

        <div class="features-content">
          <div class="left-cards">
            <app-animated-card *ngFor="let feature of leftFeatures" [feature]="feature"></app-animated-card>
          </div>

          <div class="middle-section" #middleSection>
            <img src="assets/images/hand-phone.png" alt="Mobile Preview" class="mobile-image animated-image">
          </div>

          <div class="right-cards">
            <app-animated-card *ngFor="let feature of rightFeatures" [feature]="feature"></app-animated-card>
          </div>
        </div>
      </section>

      <!-- New Section: Why Choose Us -->
      <section class="why-choose-us" style="margin-top: 2rem;">
        <h2 style="font-family: 'Manrope', sans-serif; font-weight: 700; font-size: 16px; color: #517B65;">Why Choose Us</h2>
        <h3 style="font-family: 'Manrope', sans-serif; font-weight: 600; font-size: 36px; color: #1E1E1E;">Why Thousands Trust Purify for Their Wellness.</h3>
        <div class="image-scroll" style="overflow-x: auto; white-space: nowrap;">
          <img src="assets/images/image1.png" alt="Image 1" style="width: 150px; height: auto; margin-right: 1rem;">
          <img src="assets/images/image2.png" alt="Image 2" style="width: 150px; height: auto; margin-right: 1rem;">
          <img src="assets/images/image3.png" alt="Image 3" style="width: 150px; height: auto; margin-right: 1rem;">
          <img src="assets/images/image4.png" alt="Image 4" style="width: 150px; height: auto; margin-right: 1rem;">
          <!-- Add more images as needed -->
        </div>
      </section>
    </main>
  `,
  styles: [`
    :host {
      display: block;
      background: #F7FAFC;
      min-height: 100vh;
    }

    header {
      padding: 1rem 2rem;
      background: white;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 100;
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0.5rem 2rem;
    }

    .logo {
      height: 32px;
      width: auto;
      display: flex;
      align-items: center;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;

      a {
        text-decoration: none;
        color: #4A5568;
        font-weight: 500;
        transition: color 0.2s;

        &:hover {
          color: #2F855A;
        }
      }

      .get-started {
        background: #2F855A;
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        font-weight: 500;
        transition: background 0.2s;

        &:hover {
          background: #276749;
        }
      }
    }

    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 8rem 2rem 4rem;
      text-align: center;
    }

    .hero {
      text-align: center;
      padding: 4rem 2rem;
      max-width: 800px;
      margin: 0 auto;

      h1 {
        font-size: 42px;
        font-weight: 700;
        color: #1A202C;
        margin-bottom: 1.5rem;
        line-height: 1.2;

        span {
          color: #2F855A;
        }
      }

      p {
        font-size: 20px;
        font-weight: 600;
        color: #8E8E93;
        margin-bottom: 2.5rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.5;
      }
    }

    .store-buttons {
      display: flex;
      gap: 24px;
      justify-content: center;
      margin-bottom: 5rem;
    }

    .store-button {
      background: white;
      border: 1px solid #E2E8F0;
      border-radius: 100px;
      padding: 12px 32px;
      text-decoration: none;
      transition: all 0.2s ease;
      min-width: 200px;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      }
    }

    .button-content {
      display: flex;
      align-items: center;
      gap: 12px;
      justify-content: center;

      .store-icon {
        width: 24px;
        height: 24px;
      }

      span {
        color: #2F855A;
        font-size: 18px;
        font-weight: 500;
      }
    }

    .app-preview {
      background-size: cover;
      background-position: center;
      padding: 4rem 0;
    }

    .phone-container {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      gap: 2rem;
      max-width: 1000px;
      margin: 0 auto;
      padding-bottom: 2rem;
    }

    .phone-frame {
      background: transparent;
      padding: 0;
      border-radius: 0;
      box-shadow: none;
      transition: all 0.3s ease;
      
      img {
        border-radius: 0;
        height: 500px;
        width: auto;
        display: block;
      }

      &:first-child,
      &:last-child {
        transform: translateY(40px) scale(0.85);
        opacity: 0.8;
      }
    }

    @media (max-width: 768px) {
      .hero {
        padding: 3rem 1.5rem;

        h1 {
          font-size: 32px;
          margin-bottom: 1rem;
        }

        p {
          font-size: 18px;
          margin-bottom: 2rem;
        }
      }

      .store-buttons {
        gap: 16px;
      }

      .store-button {
        padding: 10px 24px;
        min-width: 160px;
      }

      .button-content span {
        font-size: 16px;
      }

      .phone-container {
        gap: 0.5rem;
        padding-bottom: 1rem;
      }

      .phone-frame {
        padding: 0;

        img {
          height: 400px;
        }

        &:first-child,
        &:last-child {
          transform: translateY(30px) scale(0.65);
          opacity: 0.7;
        }

        &:nth-child(2) {
          transform: scale(0.9);
          z-index: 2;
        }
      }
    }

    @media (max-width: 640px) {
      .store-buttons {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }

      .store-button {
        width: 100%;
        max-width: 240px;
        justify-content: center;
      }
    }

    .store-button img {
      height: 48px;
      width: auto;
    }

    .phone-frame img {
      height: 580px;
      width: auto;
    }

    .features-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0;
    }

    .left-cards, .right-cards {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 15rem;
    }

    .middle-section {
      opacity: 0;
      transform: translateY(50px);
      transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1rem;
    }

    .middle-section.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .mobile-image {
      width: 90%;
      max-width: 400px;
      height: auto;
    }

    .animated-image {
      transition: transform 0.8s ease, opacity 0.8s ease;
    }
  `]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('middleSection', { static: true }) middleSection!: ElementRef;

  leftFeatures = [
    {
      icon: 'assets/images/dieat.png',
      title: 'Dietary Tip',
      description: "Don't forget to take your recommended supplements after lunch today.",
      position: 'left'
    },
    {
      icon: 'assets/images/reminder.png',
      title: 'Wake Up Reminder',
      description: 'Stay on track with 25+ notifications guiding your day.',
      position: 'left'
    },
    {
      icon: 'assets/images/pranayamaa.png',
      title: 'Pranayama',
      description: 'Experience the calming power of guided breathing exercises.',
      position: 'left'
    },
  ];
  

  rightFeatures = [
    {
      icon: 'assets/images/live.png',
      title: 'Upcoming Live Class',
      description: 'Your live class Morning Yoga Flow starts in 15 minutes. Get ready!',
      position: 'right'
    },
    {
      icon: 'assets/images/drinks.png',
      title: 'Unique Drinks',
      description: 'Juices, teas, smoothies, and more to complement your wellness routine.',
      position: 'right'
    },
    {
      icon: 'assets/images/unique-drinks.png',
      title: 'Unique Drinks',
      description: 'Juices, teas, smoothies, and more to complement your wellness routine',
      position: 'right'
    },
  ];
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      );

      observer.observe(this.middleSection.nativeElement);
    } else {
      // For SSR, show content immediately
      this.middleSection.nativeElement.classList.add('visible');
    }
  }
}
