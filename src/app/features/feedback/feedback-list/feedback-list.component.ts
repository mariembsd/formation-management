import { Component, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-feedback-list',
  standalone: true,
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css'], // Note: use 'styleUrls' instead of 'styleUrl'
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class FeedbackListComponent implements AfterViewInit {

  showFeedback = true;

  ngAfterViewInit(): void {
    this.initializeRatingStars();
  }

  toggleFeedback(): void {
    this.showFeedback = !this.showFeedback;
  }

  onSubmit(): void {
    // Handle form submission
  }

  private initializeRatingStars(): void {
    document.querySelectorAll('.rating span').forEach(star => {
      star.addEventListener('mouseover', () => {
        const rating = star.getAttribute('data-value');
        if (rating !== null) {
          const ratingValue = Number(rating);
          document.querySelectorAll('.rating span').forEach(s => {
            const starValue = Number(s.getAttribute('data-value'));
            if (starValue <= ratingValue) {
              s.classList.add('highlighted');
            } else {
              s.classList.remove('highlighted');
            }
          });
        }
      });

      star.addEventListener('mouseout', () => {
        document.querySelectorAll('.rating span').forEach(s => {
          s.classList.remove('highlighted');
        });
      });

      star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');
        if (rating !== null) {
          const ratingValue = Number(rating);
          document.querySelectorAll('.rating span').forEach(s => {
            const starValue = Number(s.getAttribute('data-value'));
            if (starValue <= ratingValue) {
              s.classList.add('selected');
            } else {
              s.classList.remove('selected');
            }
          });
        }
      });
    });
  }
}
