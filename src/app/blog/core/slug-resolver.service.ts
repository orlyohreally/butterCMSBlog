import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';
import { BlogPost, BlogPostMeta } from '../types';
import { ButterCMSService } from './butter-cms.service';

@Injectable({
  providedIn: 'root',
})
export class SlugResolverService
  implements Resolve<{ data: BlogPost; meta: BlogPostMeta }> {
  constructor(private butterCMSService: ButterCMSService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<{ data: BlogPost; meta: BlogPostMeta }> {
    const slug = route.paramMap.get('slug');
    return this.butterCMSService.getPostDetails(slug);
  }
}
