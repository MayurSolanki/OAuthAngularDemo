import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   oauthConsumerKey: string = "";
   successCallBack: string = "";
   oauthConsumerSecret:string = "";
   storeBaseUrl:string = "";
   oauthVerifier:string = "";



  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Subscribe to changes in the query parameters
    this.route.queryParams.subscribe(params => {
      // Read the oauth_consumer_key and success_call_back parameters
      this.oauthConsumerKey = params['oauth_consumer_key'];
      this.successCallBack = params['success_call_back'];
      //
      this.oauthConsumerSecret = params['oauth_consumer_secret'];
      this.storeBaseUrl = params['store_base_url'];
      this.oauthVerifier = params['oauth_verifier'];

      console.log("params", params);

      console.log("oauthConsumerKey", this.oauthConsumerKey);
      console.log("successCallBack", this.successCallBack);
      console.log("oauthConsumerSecret", this.oauthConsumerSecret);
      console.log("storeBaseUrl", this.storeBaseUrl);
      console.log("oauthVerifier", this.oauthVerifier);



    });
  }

  OnClick(){
    this.router.navigate(['/dashboard'], {
      queryParams: {
        oauth_consumer_key: this.oauthConsumerKey,
        success_call_back: this.successCallBack,
        //
        oauth_consumer_secret : this.oauthConsumerSecret,
        store_baseUrl :  this.storeBaseUrl,
        oauth_verifier : this.oauthVerifier,



      }
    });
  }

}
