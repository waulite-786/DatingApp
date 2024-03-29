import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs'
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  basUrl = environment.apiUrl;
  members : Member[]= [];

  constructor(private http:HttpClient) { }

  getMembers(){
    if(this.members.length > 0) return of(this.members)
    return this.http.get<Member[]>(this.basUrl + 'users').pipe(
      map(members =>{
         this.members = members;
         return members;
      })
    )
  }
  getMember(username:string){
    const member = this.members.find(x=> x.userName == username);
    if(member) return of(member);
    return this.http.get<Member>(this.basUrl + 'users/' + username)
  }
  updateMember(member :Member){
    return this.http.put(this.basUrl + 'users' , member).pipe(
      map(()=>{
        const index = this.members.indexOf(member);
        this.members[index] = {...this.members[index], ...member}
      })
    )
  }
  setMainPhoto(photoId:number){
    return this.http.put(this.basUrl + 'users/set-main-photo/' + photoId,{});
  }
  deletePhoto(photoId:number){
    return this.http.delete(this.basUrl + 'users/delete-photo/' + photoId);
  }

}
