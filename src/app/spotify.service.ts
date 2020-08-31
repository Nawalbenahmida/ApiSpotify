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
private auth_token:string="Bearer BQCnB8kwmCeRynuEHSzqR6dvzMLomFK8nwNvKXHLmQMAzIn5VtpUZoZZKQ_6wHHnnBleFgnb1B6sC8n3dEX6SIzHMSE50-ZNLK1JR-5lNv8mJIACmqemejuFPLuJAXTSvuQhJdEQ1F2henh2LksEJ-avQlYYmNHs5wGLucJQZ_49i4leeu6jFg&refresh_token=AQAljicswy2kypRc9nnWpgJoGbydcPILwUdvOYCtwHjXDDvrKRyZqzmCiC6uGU0JAqnawHgG8575eIte4PIygyh6N0krItO0X5fvIiWQq5zK00yD8ARodvtZV-Kr0RorsBk";
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
