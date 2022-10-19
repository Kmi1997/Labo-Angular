import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCoopComponent } from './profil-coop.component';

describe('ProfilCoopComponent', () => {
  let component: ProfilCoopComponent;
  let fixture: ComponentFixture<ProfilCoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilCoopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilCoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
