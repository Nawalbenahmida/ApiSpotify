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
private auth_token:string="Bearer  BQDmKYUsJgNEZ1PcUqYKPohdHv2w0vuXP6v0ja5RcsHi6vxxq04u1XG-DOltPeijYfW1FaWnkgxeS5EEls2bj2lx-NXwpZXGwRm6AnbEVSxxBKUGAEbKLNeuOD7sP8i3CIjA6i-ObpgDeHmZ5v3YnxitDCI6sBTgr6Ttr2m5X0MPlP2-xkoUCw&refresh_token=AQC7DVlVaxWMluWsyvExBg5kxlHxGQniPKCpxdNt3QgqEgUViRkzCmJNK2El_d4RFkv_1V6R_I1yapVMmMuoh6WqAzhaQvxveHLbYiB_0WXmq_VnbiZO2bW-gbHGoBP77To";
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
