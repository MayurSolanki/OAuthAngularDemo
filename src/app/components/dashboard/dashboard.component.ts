import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  oauthConsumerKeyy: string = "";
  successCallBack: string = "";
  countdown: number = 10;
  dataString = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Extract credentials from URL parameters
    this.route.queryParams.subscribe(params => {
      console.log("params", params);
      const oauthConsumerKey = params['oauth_consumer_key'];
      const oauthConsumerSecret = params['oauth_consumer_secret'];
      const storeBaseUrl = params['store_base_url'];
      const oauthVerifier = params['oauth_verifier'];
      // Process the received credentials as needed

      this.oauthConsumerKeyy = params['oauth_consumer_keyy'];
      this.successCallBack = params['success_call_back'];

      console.log("params", params);
      console.log("oauthConsumerKey", oauthConsumerKey);
      console.log("oauthConsumerSecret", oauthConsumerSecret);
      console.log("storeBaseUrl", storeBaseUrl);
      console.log("oauthVerifier", oauthVerifier);
      console.log("oauthConsumerKeyy", this.oauthConsumerKeyy);
      console.log("successCallBack", this.successCallBack);

      this.dataString =
      ` \n
      params : ${params} \n
      oauthConsumerKey : ${oauthConsumerKey} \n
      oauthConsumerSecret : ${oauthConsumerSecret} \n
      storeBaseUrl : ${storeBaseUrl} \n
      oauthVerifier : ${oauthVerifier} \n
      oauthConsumerKeyy : ${this.oauthConsumerKeyy} \n
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
