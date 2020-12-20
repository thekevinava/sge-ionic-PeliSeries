import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.page.html',
  styleUrls: ['./admin-panel.page.scss'],
})
export class AdminPanelPage implements OnInit {
  username: string;

  constructor(private userData: UserData) { }

  ngOnInit() {
    this.getUsername();
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

}
