import {Component, OnInit} from '@angular/core';
import {ContenfulService} from "../contenful.service";

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css']
})
export class PageComponent {
    siteData;

    constructor(private cs: ContenfulService) {
        cs.getParsedWebsiteContent().then(res => {
            console.log(res);
            this.siteData = res
        });
    }
}
