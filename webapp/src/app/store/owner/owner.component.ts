import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/signup/User';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  pendingList: User[];
  newStatus: string;
  statusFlag: boolean;
  rejectFlag: boolean;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getPendingList().subscribe(response => {
      this.pendingList = response;
    })

  }

  approveStatus(user: User) {
    this.statusFlag = true;
    this.userService.approveManagerStatus(user).subscribe(response => {
      this.userService.getPendingList().subscribe(response => {
        this.pendingList = response;
      });
    });
  }

  rejectStatus(user: User) {
    this.rejectFlag = true;
    this.userService.rejectManagerStatus(user).subscribe(response => {
      this.userService.getPendingList().subscribe(response => {
        this.pendingList = response;
      });
    });
  }

}
