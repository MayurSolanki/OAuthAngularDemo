import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  countdown: number = 10;
  dataString = '';
  //
  oauthConsumerKey: string = '';
  successCallBack: string = '';
  oauthConsumerSecret: string = '';
  storeBaseUrl: string = '';
  oauthVerifier: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Extract credentials from URL parameters
    this.route.queryParams.subscribe((params) => {
      this.oauthConsumerKey = params['oauth_consumer_keyy'];
      this.successCallBack = params['success_call_back'];
      this.oauthConsumerSecret = params['oauth_consumer_secret'];
      this.storeBaseUrl = params['store_baseUrl'];
      this.oauthVerifier = params['oauth_verifier'];


       this.dataString =
      ` \n
      params : ${params} \n
      oauthConsumerKey : ${this.oauthConsumerKey} \n
      oauthConsumerSecret : ${this.oauthConsumerSecret} \n
      storeBaseUrl : ${this.storeBaseUrl} \n
      oauthVerifier : ${this.oauthVerifier} \n
      successCallBack : ${this.successCallBack} \n
      `;

      // Start the countdown timer
      this.startCountdown();
    });
  }

  startCountdown(): void {
    const intervalId = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(intervalId);
        // Redirect the user after the countdown
        if (this.successCallBack) {
          window.location.href = this.successCallBack;
        }
      }
    }, 1000);
  }
}
