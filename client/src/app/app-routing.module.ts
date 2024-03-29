import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { TestErrorComponent } from './errors/test-error/test-error.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailsComponent } from './member/member-details/member-details.component';
import { MemberEditComponent } from './member/member-edit/member-edit.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { PreventUnsavedChangesGuard } from './_guards/prevent-unsaved-changes.guard';
import { Constant } from './_utils/constant';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: '',
   runGuardsAndResolvers:'always',
   canActivate:[AuthGuard],
   children:[
    {path:Constant.ROUTES_MEMBERS,component:MemberListComponent},
    {path:Constant.ROUTES_MEMBER_DETAILS,component:MemberDetailsComponent},
    {path:Constant.ROUTES_MEMBER_EDIT,component:MemberEditComponent,canDeactivate:[PreventUnsavedChangesGuard]},
    {path:Constant.ROUTES_LISTS,component:ListsComponent},
    {path:Constant.ROUTES_MESSAGE,component:MessagesComponent},
   ]
  },
  {path:'errors', component: TestErrorComponent},
  {path:'not-found', component: NotFoundComponent},
  {path:'server-error', component: ServerErrorComponent},
  {path:"**",component:NotFoundComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
