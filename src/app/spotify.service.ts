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
  private auth_token:string="Bearer  BQD28ygP9sTyfaQsBWK4LOTqnhMKpnTSXNvoMcaqh3HKHctSKG4BVedyy34-zFW8bCxKoHdnEMIXCq52t40a_fYm0MIW0V6tHCbKB66dPPQNO-omtUT9OsDeMCsKJ-y0hOfbU4KC20CSidLdaYIsRAMHEdWhgUvU3tMo_i3qTcWXcmrs5l9WfA&refresh_token=AQAPrhOt9NQHgyuiM6V0fr-WoS0iq5wBlgfKeZI71VjtmfduwTvurTRe6FMPHyDOD_ZWUKAyUBYXNSxehb82HQbi_U7VoPkADHNS2XiPz3Tyj1kKoRBOKDbY6soqnaHwf8c";
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
