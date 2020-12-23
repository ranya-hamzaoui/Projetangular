import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'projet9';

  constructor() { }

  ngOnInit() {

    this.loadExternalScript("assets/vendor/jquery/jquery.min.js")
    this.loadExternalScript("assets/css/bootstrap.min.css")
    this.loadExternalScript("assets/css/owl.carousel.min.css")
    this.loadExternalScript("assets/css/flaticon.css")
    this.loadExternalScript("assets/css/slicknav.css")
    this.loadExternalScript("assets/css/animate.min.css")
    this.loadExternalScript("assets/css/magnific-popup.css")
    this.loadExternalScript("assets/css/fontawesome-all.min.css")
    this.loadExternalScript("assets/css/themify-icons.css")
    this.loadExternalScript("assets/css/slick.css")
    this.loadExternalScript("assets/css/nice-select.css")
    this.loadExternalScript("assets/css/style.css")
    this.loadExternalScript("assets/js/vendor/jquery-1.12.4.min.js")
    this.loadExternalScript("assets/js/popper.min.js")
    this.loadExternalScript("assets/js/bootstrap.min.js")
    this.loadExternalScript("assets/js/jquery.slicknav.min.js")
    this.loadExternalScript("assets/js/owl.carousel.min.js")
    this.loadExternalScript("assets/js/slick.min.js")
    this.loadExternalScript("assets/js/wow.min.js")
    this.loadExternalScript("assets/js/animated.headline.js")
    this.loadExternalScript("assets/js/jquery.magnific-popup.js")
    this.loadExternalScript("assets/js/jquery.scrollUp.min.js")
    this.loadExternalScript("assets/js/jquery.nice-select.min.js")
    this.loadExternalScript("assets/js/jquery.sticky.js")
    this.loadExternalScript("assets/js/contact.js")
    this.loadExternalScript("assets/js/jquery.form.js")
    this.loadExternalScript("assets/js/jquery.validate.min.js")
    this.loadExternalScript("assets/js/mail-script.js")
    this.loadExternalScript("assets/js/jquery.ajaxchimp.min.js")
    this.loadExternalScript("assets/js/plugins.js")
    this.loadExternalScript("assets/js/main.js")
  }

  public loadExternalScript(url: string) {
    
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }


}
