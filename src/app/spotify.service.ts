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
private auth_token:string="Bearer  BQBEs9YCwDJ9he21UXMgBPWkq95HQZgcmk6dWAvfLy7iTAeSV2tn5ZTYsndury2ZV6fWKXKxr66a6gbGXXPW9meTJqUIInWTspylyj9isnLPonBSbDjViZ-sssU_u47PaaPHqgzXcTNAmTP-_3IFqwrF60Wd7sKFhcSwOg-2GxzaIG5ueqWyZA&refresh_token=AQA6am5jMS7GAS6NXEB2ZV6qkckN2-Okwubp49vfvK5aL-_r6hFe39PleogC2E72IPyD9zgBVcfUS-fQJyJajbhEwj7oSgvWVJziAFBojMRuzUmI6KyR6kbSnMI2Zw-Zft8";
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
