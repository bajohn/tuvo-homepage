import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiViewerComponent } from './pi-viewer.component';

describe('PiViewerComponent', () => {
  let component: PiViewerComponent;
  let fixture: ComponentFixture<PiViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
