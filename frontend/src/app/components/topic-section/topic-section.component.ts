import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topic-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topic-section.component.html',
  styleUrl: './topic-section.component.css'
})
export class TopicSectionComponent implements OnInit {
  @Input() title: string = '';
  @Input() topicNumber: number = 1;
  @Input() defaultOpen: boolean = false;
  @Input() isOpen: boolean = false;
  @Output() opened = new EventEmitter<TopicSectionComponent>();
  
  ngOnInit() {
    if (this.defaultOpen && !this.isOpen) {
      this.isOpen = true;
    }
  }

  toggle() {
    if (!this.isOpen) {
      // Emit event to parent to close other sections
      this.opened.emit(this);
    }
    this.isOpen = !this.isOpen;
  }

  close() {
    this.isOpen = false;
  }
}
