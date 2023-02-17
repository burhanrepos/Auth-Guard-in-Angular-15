import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClilistComponent } from './clilist.component';

describe('ClilistComponent', () => {
  let component: ClilistComponent;
  let fixture: ComponentFixture<ClilistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClilistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClilistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
