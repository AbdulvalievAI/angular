import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";

interface IBreadcrumbs {
  url: string;
  title: string;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  public pages: Array<IBreadcrumbs> = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(value => {
        this.pages = this.createBreadcrumbs(this.activatedRoute.root);
        console.log('===> pages', this.pages);
      });
  }


  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: Array<IBreadcrumbs> = []) {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) return breadcrumbs;

    for (const child of children) {
      let routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      const title: string = child.snapshot.data['breadcrumbs'];

      if(routeURL && title) {
        url += `${routeURL}/`
        breadcrumbs.push({
          url,
          title,
        });
      }

      return this.createBreadcrumbs(child, url, breadcrumbs);
    }
  }
}
