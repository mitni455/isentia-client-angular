import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';

/**
*
* Core 
*
**/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

/**
*
* Routes
*
**/
import { AppRoutingModule }     from '../../../app-routing.module';


/**
*
* Components
* 
**/
import { AppComponent } from '../../../components/app.component';
import { LayoutHeaderComponent } from '../../../layout/layout-header/layout-header.component';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { SidebarItemComponent } from '../../../components/sidebar/sidebar-item/sidebar-item.component';
import { ContainerComponent } from '../../../components/container/container.component';
import { FlickrListComponent } from './flickr-list.component';
import { FlickrTileComponent } from '../flickr-list/flickr-tile/flickr-tile.component';
import { FlickrDetailsComponent } from '../flickr-details/flickr-details.component';
import { FlickrSearchComponent } from '../flickr-search/flickr-search.component';
import { FlickrFavouritesComponent } from '../flickr-favourites/flickr-favourites.component';
// import { AuthComponent } from './auth/auth.component';
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';
// import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
// import { ConfirmEmailComponent } from './auth/confirm-email/confirm-email.component';
// import { ProfileComponent } from './auth/profile/profile.component';



/**
*
* Models
* 
**/
import { FlickrPhoto } from '../../../models/FlickrPhotoModel';

/**
*
* Services
*
**/
import { FlickrApiService } from '../../../services/flickr-api/flickr-api.service';


/**
*
* Factories
*
**/
import { FavouritesFactory } from '../../../models/factories/FavouritesFactory';
import { PhotoCache } from '../../../models/factories/PhotoCache';


describe('FlickrListComponent', () => {
    let component: FlickrListComponent;
    let fixture: ComponentFixture<FlickrListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ 
                AppComponent,
                LayoutHeaderComponent,
                SidebarComponent,
                SidebarItemComponent,
                ContainerComponent,
                FlickrListComponent,
                FlickrTileComponent,
                FlickrDetailsComponent,
                FlickrSearchComponent,
                FlickrFavouritesComponent
            ],
            imports: [
                BrowserModule,
                FormsModule, 
                AppRoutingModule,
                HttpClientModule
            ],
            providers: [
                {provide: APP_BASE_HREF, useValue : '/' },
                FavouritesFactory, 
                PhotoCache,
                FlickrApiService
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FlickrListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    /**
    *
    * Test Attributes 
    * - Photo models
    * - Layout 
    *
    ***/
    it('should show Photo Models tiles', async(() => {
        
        const fixture = TestBed.createComponent(FlickrListComponent);
        fixture.detectChanges();

        var photo1:IFlickrApiItemContract = {
            title : 'title',
            link : 'link',
            media : {
                m: 'media'
            },
            date_taken : 'date_taken',
            description : 'description',
            published : 'published',
            author : 'author',
            author_id : 'author_id',
            tags : 'tags',
            photo_id : 'photo_id',
            isFavourite : 'isFavourite',
        };
        var photoModel = new FlickrPhoto(photo1);
        fixture.photos = [photoModel];

        const compiled = fixture.debugElement.nativeElement;

        var lookForEl = compiled.querySelector('flickr-tile');

        //expect(compiled.innerHTML).toEqual(true)
        
    });
});
