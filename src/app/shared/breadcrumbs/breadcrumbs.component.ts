import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

interface Breadcrumb {
  label: string;
  url: string;
  isLast: boolean;
}

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
      });

    // Initialize breadcrumbs
    this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Breadcrumb[] = []
  ): Breadcrumb[] {
    // Get the route's children
    const children = route.children;

    // Return if no children
    if (children.length === 0) {
      return breadcrumbs;
    }

    // For each child
    for (const child of children) {
      // Get the child's URL segment
      const routeURL: string = child.snapshot.url
        .map(segment => segment.path)
        .join('/');
      
      // If route has a URL
      if (routeURL !== '') {
        // Construct the route URL
        url += `/${routeURL}`;

        // Get the route's data
        const routeData = child.snapshot.data;
        
        // If the route has a breadcrumb title, add to breadcrumbs
        let label = routeData['breadcrumb'] || this.formatLabel(routeURL);
        
        breadcrumbs.push({
          label,
          url,
          isLast: false
        });
      }

      // Recursively get breadcrumbs from child routes
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }

    // Mark last breadcrumb
    if (breadcrumbs.length > 0) {
      breadcrumbs[breadcrumbs.length - 1].isLast = true;
    }
    
    // Add home as first item if breadcrumbs exist
    if (breadcrumbs.length > 0) {
      breadcrumbs.unshift({
        label: 'home',
        url: '/',
        isLast: breadcrumbs.length === 0
      });
    } else {
      breadcrumbs.push({
        label: 'home',
        url: '/',
        isLast: true
      });
    }

    return breadcrumbs;
  }

  private formatLabel(label: string): string {
    // Remove dashes and underscores, capitalize first letter
    return '_' + label.replace(/-|_/g, ' ');
  }
}
