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




  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Subscribe to changes in the query parameters
    this.route.queryParams.subscribe(params => {
      // Read the oauth_consumer_key and success_call_back parameters
      this.oauthConsumerKey = params['oauth_consumer_key'];
      this.successCallBack = params['success_call_back'];

      console.log("params", params);

      console.log("oauthConsumerKey", this.oauthConsumerKey);
      console.log("successCallBack", this.successCallBack);



    });
  }

  OnClick(){
    this.router.navigate(['/dashboard'], {
      queryParams: {
        oauth_consumer_key: this.oauthConsumerKey,
        success_call_back: this.successCallBack,
      



      }
    });
  }

}
