import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SectionService {

  private activeSectionSubject = new Subject<string>();
  activeSection$ = this.activeSectionSubject.asObservable();

  setActiveSection(sectionId: string) {
    this.activeSectionSubject.next(sectionId);
  }
}