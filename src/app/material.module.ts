import { NgModule } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [MatBadgeModule,
            MatButtonModule,
            MatToolbarModule,
            MatSidenavModule,
            MatIconModule,
            MatListModule,
            MatTabsModule],
  exports: [MatBadgeModule,
            MatButtonModule,
            MatToolbarModule,
            MatSidenavModule,
            MatIconModule,
            MatListModule,
            MatTabsModule]
})
export class MaterialModule { }
