import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../share/services/auth.service";
import {response} from "express";

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.scss'
})
export class DoctorListComponent implements OnInit {
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getDoctor().subscribe(response=>{
      console.log(response);
    })
  }

}
