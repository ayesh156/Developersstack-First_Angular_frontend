import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../share/services/auth.service";
import {response} from "express";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-verification',
  templateUrl: './admin-verification.component.html',
  styleUrl: './admin-verification.component.scss'
})
export class AdminVerificationComponent implements OnInit{
  constructor(private authService:AuthService, private router:Router) {
  }
    ngOnInit(): void {
        this.verify();
    }

    private verify() {
      this.authService.verify('ADMIN').subscribe(response=>{
        if(response.data){
          this.router.navigateByUrl('/admin/new-doctor');
        }else{
          alert('Wrong authentication!');
          this.router.navigateByUrl('/security/login');
        }
      })
    }

}
