import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MemberEditComponent } from '../member/member-edit/member-edit.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<MemberEditComponent> {
  canDeactivate(component:MemberEditComponent): boolean {
    if(component.editForm?.dirty){
      return confirm('Are you sure want to continue? Any unsaved chnages will be lost');
    }
    return true;
  }

}
