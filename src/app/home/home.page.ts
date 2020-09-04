import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SpotifyService } from '../spotify.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items:any[];


  constructor(public navCtrl: NavController,private spotifyService: SpotifyService, private router: Router) {}


  search(event:any){
    let value = event.target.value;
    console.log(value);
    this.spotifyService.searchArtists(value).subscribe(
      data=>{
        this.items=data.artists.items;
        console.log(data);
      })
    }

    searchAlbums(id:string, name:string){
      this.router.navigate(['/albums', {id:id, name:name}]);

    }




  }
