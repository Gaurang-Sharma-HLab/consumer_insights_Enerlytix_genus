import { Component, Input, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicIconService, IconName } from '../../services/topic-icon.service';
import { TopicIconComponent } from '../topic-icon/topic-icon.component';

@Component({
  selector: 'app-topic-section',
  standalone: true,
  imports: [CommonModule, TopicIconComponent],
  templateUrl: './topic-section.component.html',
  styleUrl: './topic-section.component.css'
})
export class TopicSectionComponent implements OnInit {
  @Input() title: string = '';
  @Input() topicNumber: number = 1; // Kept for backward compatibility, but not used for display
  @Input() iconName?: IconName; // Optional: if provided, use this icon; otherwise auto-detect from title
  @Input() defaultOpen: boolean = false;
  @Input() isOpen: boolean = false;
  @Output() opened = new EventEmitter<TopicSectionComponent>();
  @ViewChild('sectionElement', { static: false }) sectionElement!: ElementRef<HTMLElement>;
  
  iconNameToDisplay: IconName = 'default';
  
  constructor(private topicIconService: TopicIconService) {}
  
  ngOnInit() {
    // Removed auto-open functionality - all sections start closed
    this.isOpen = false;
    
    // Determine icon to display
    if (this.iconName) {
      this.iconNameToDisplay = this.iconName;
    } else {
      this.iconNameToDisplay = this.topicIconService.getIconForTopic(this.title);
    }
  }

  toggle() {
    const wasClosed = !this.isOpen;
    this.isOpen = !this.isOpen;
    
    if (wasClosed && this.isOpen) {
      // Emit event to parent to close other sections
      this.opened.emit(this);
      // Wait for content expansion animation (300ms transition) plus buffer
      setTimeout(() => {
        requestAnimationFrame(() => {
          this.scrollToSection();
        });
      }, 350);
    }
  }

  scrollToSection() {
    if (this.sectionElement?.nativeElement) {
      const element = this.sectionElement.nativeElement;
      const headerHeight = 56; // Height of the main header
      
      // Use the section element itself as the target (not just the button)
      const targetElement = element;
      
      // Find the scrollable container - try multiple methods
      let scrollContainer: HTMLElement | null = null;
      
      // Method 1: closest with class
      scrollContainer = element.closest('.overflow-y-auto') as HTMLElement;
      
      // Method 2: traverse up looking for overflow-y-auto
      if (!scrollContainer) {
        let current: HTMLElement | null = element.parentElement;
        while (current && current !== document.body) {
          const styles = window.getComputedStyle(current);
          if (styles.overflowY === 'auto' || styles.overflowY === 'scroll' || current.classList.contains('overflow-y-auto')) {
            scrollContainer = current;
            break;
          }
          current = current.parentElement;
        }
      }
      
      if (scrollContainer) {
        // Wait one more frame to ensure layout is complete
        requestAnimationFrame(() => {
          const containerRect = scrollContainer!.getBoundingClientRect();
          const elementRect = targetElement.getBoundingClientRect();
          
          // Calculate absolute position in scrollable content
          const elementTopInContent = scrollContainer!.scrollTop + (elementRect.top - containerRect.top);
          
          // Target: position at top of visible area (below header)
          const targetScrollTop = elementTopInContent - headerHeight;

          // Scroll smoothly
          scrollContainer!.scrollTo({
            top: Math.max(0, targetScrollTop),
            behavior: 'smooth'
          });
        });
      } else {
        // Fallback: use window scroll
        requestAnimationFrame(() => {
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          });
        });
      }
    }
  }

  close() {
    this.isOpen = false;
  }
}
