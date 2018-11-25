import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.sass']
})
export class BreadcrumbsComponent {
  breadcrumbs: Array<Object>;
  hide: false;
  constructor(private router: Router, private route: ActivatedRoute, private titleService: Title) {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(event => {  // note, we don't use event
        this.breadcrumbs = [];
        let currentRoute = this.route.root;
        let url = '';
        this.hide = false;
        do {
          const childrenRoutes = currentRoute.children;
          currentRoute = null;
          childrenRoutes.forEach(routes => {
            if (routes.outlet === 'primary') {
              const routeSnapshot = routes.snapshot;
              url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
              if (routes.snapshot.data.breadcrumb !== undefined) {
                let status = true;
                if (routes.snapshot.data.status !== undefined) {
                  status = routes.snapshot.data.status;
                }

                this.breadcrumbs.push({
                  title: routes.snapshot.data.breadcrumb,
                  description: routes.snapshot.data.description,
                  status: status,
                  url: url,
                  hide: routes.snapshot.data.hide
                });

                if (!this.hide) {
                  this.hide = routes.snapshot.data.hide;
                  console.log(`HIDE : ${this.hide}`);
                }

              }
              currentRoute = routes;
            }
          });
        } while (currentRoute);
      });
  }
}
