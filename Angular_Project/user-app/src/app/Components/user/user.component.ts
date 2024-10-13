import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../Model/user';
import { FormsModule, NgForm } from'@angular/forms';
import { UserService } from '../../Services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent  implements OnInit{
  userList:UserModel[]=[];
user:UserModel={
  assignedTo:"",
  
  
  DueDate:"",
  Priority:"",
  salary:0,
  Comments:"",
  Status:false,
}
constructor(private _userService:UserService){}
ngOnInit(): void {
  this.getUserList();
}

departmentList:string[]=["User 1","User 2","User 3","User 4","User 5"];
getUserList()
{
  this._userService.getUsers().subscribe((res)=>{
    this.userList=res;

  });
}
onSubmit(form:NgForm):void
{
    debugger;
    console.log(form);
    this._userService.addUser(this.user).subscribe((res)=>
    {
      this.getUserList();
      form.reset();
      
    });
}
onEdit(){

}
onDelete(){

}
onResetForm(){

}

}
