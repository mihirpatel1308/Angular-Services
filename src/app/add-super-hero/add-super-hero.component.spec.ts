import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuperHeroComponent } from './add-super-hero.component';

describe('AddSuperHeroComponent', () => {
  let component: AddSuperHeroComponent;
  let fixture: ComponentFixture<AddSuperHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSuperHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSuperHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
