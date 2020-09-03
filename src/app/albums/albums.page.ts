import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { SpotifyService } from '../spotify.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
})
export class AlbumsPage implements OnInit {

  private id: string;
  private name: string;
  private albums: any[];


  constructor(public navCtrl: NavController, private spotifyService: SpotifyService, private route: ActivatedRoute,
    private router: Router) {

      this.id = this.route.snapshot.paramMap.get('id');
      this.name = this.route.snapshot.paramMap.get('name');
      this.getAlbums();
    }


    getAlbums(){
      this.spotifyService.searchAlbums(this.id).subscribe(
        data=>{
          this.albums= data.items;
          console.log(data)
        })
      }

detailsAlbums(id:string){
  this.router.navigate(['/detail-albums', {id:id}]);

}


  ngOnInit() {

  }

}
