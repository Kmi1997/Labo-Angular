import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SearchAuthService } from '../services/search-auth.service';
import { SubscribeService } from '../services/subscribe.service';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NavbarComponent],
            providers: [
                FormBuilder,
                HttpClient,
                SearchAuthService,
                SubscribeService
            ],
            imports: [
                HttpClientModule,
                ReactiveFormsModule,
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('navbar-connected', () => {


        expect(component.okToConnection)
            .toBeTrue()

        component.connectionServe()

        expect(component.okToConnection)
            .toEqual(true || false)
    })   

    it('navbar-sessionStorage', () => {


        expect(component.session)
            .toBeGreaterThanOrEqual(0)

        component.logout()

        expect(component.session)
            .toEqual(0)
    });
    
});