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
private auth_token:string="Bearer  BQBUKnDilc_ugCEh1UNq9wE85kzhywjD4KLltmFNWTx8gxAgZcKz8Dpa-8sUsSGijec3ko3oUs3s5TF1QasPPXBteSZCLgBmj41mz5DihUokcoC1VQ4Hnj-wV2vomZHSNODew7hqaG2xICW9WiDvufACLgqnOr_gdnhgEmQKJt0ATGGk07OaXQ&refresh_token=AQAhnNL2dgyd0hjzrqZzhMXHHCWIAHvct4zIKN7zg1A8X9XoEKN9aHlir2g-TvttkUwpfZJNxAUYrBZDaBXqtvp0VFt0tU_nQEZ61Em7ZAWH7P4fA-kEJtZ_yOlALFV1sb0";
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
