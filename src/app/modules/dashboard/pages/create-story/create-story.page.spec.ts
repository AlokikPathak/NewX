import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStoryPage } from './create-story.page';

describe('CreateStoryPage', () => {
  let component: CreateStoryPage;
  let fixture: ComponentFixture<CreateStoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStoryPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
