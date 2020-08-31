import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
private baseUrl:string="https://api.spotify.com/v1";
private searchUrl:string=this.baseUrl+'/search?q=';
private albumsUrl:string=this.baseUrl+'/artists/';
private albumUrl:string=this.baseUrl+'/albums/';
private auth_token:string="Bearer BQC_ZA7duaiqMW7P30C_mKvNRZaAQPzZZLBiJuknRN9eoawavJ_z69cJFrTJrgzFEDzCOqPPzRTCo3oMDLaBJR_kYAszSu6xCFP2ltqMyVVrDqiJsr1OOY4H2rA3PACBei_G3U0eoIAm00uWLbBlDBiHDEw6CV1VziRiz86JWJHu2jlrkLjwZg&refresh_token=AQBTM9wDWs1MKHEpKRqieLjMK1bg482SV7sVfp29k8VCyYa5C5zZEpqrQJMjxerWBb53lf7dUAmpzFCh4L0cFwjdtIbDL9VHUydJRQz7S-wYx49dL_jxo5-EvcWliSd_3x0";
private requestHeader= new HttpHeaders().set('Content-Type','application/json')
.append('Authorization',this.auth_token);

  constructor(private http: HttpClient) {}

searchArtists(name:string){
return this.http.get(this.searchUrl+name+'&type=artist',{headers:this.requestHeader});
}

searchAlbums(id:string){
return this.http.get(this.albumsUrl+id+'/albums',{headers:this.requestHeader});
}

searchAlbum(id:string){
return this.http.get(this.albumUrl+id,{headers:this.requestHeader});
}

}
