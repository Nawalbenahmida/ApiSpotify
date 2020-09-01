import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailAlbumsPage } from './detail-albums.page';

describe('DetailAlbumsPage', () => {
  let component: DetailAlbumsPage;
  let fixture: ComponentFixture<DetailAlbumsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAlbumsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailAlbumsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
