import { Component } from '@angular/core';
import { SectionService } from 'src/app/section.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  activeSection = '';

  constructor(private sectionService:SectionService) {
    this.sectionService.activeSection$.subscribe((section) => {
      this.activeSection = section;
    });
  }

}