import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-detail-albums',
  templateUrl: './detail-albums.page.html',
  styleUrls: ['./detail-albums.page.scss'],
})
export class DetailAlbumsPage implements OnInit {
  private id: string;
  private album: any;
  private imageLink: string;
  private tracks:any[];
  private artists:any[]


  constructor( private spotifyService: SpotifyService,private route: ActivatedRoute,
    private router: Router, private iab: InAppBrowser) {

      this.id = this.route.snapshot.paramMap.get('id');
      this.getAlbum();
    }

    getAlbum(){
      this.spotifyService.searchAlbum(this.id).subscribe(
        data=>{
          this.album= data;
          this.imageLink = this.album.images[1];
          this.artists = this.album.artists;
          this.tracks = this.album.tracks.items;
          console.log(data)
        })
      }

      playTrack(url: string){
        let options : InAppBrowserOptions = {
          zoom : 'no'
        }
        this.iab.create(url, '_self', options)
      }



  ngOnInit() {
  }

}
