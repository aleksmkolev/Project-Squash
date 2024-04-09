import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomMsgComponent } from './welcom-msg/welcom-msg.component';
import { RouterModule } from '@angular/router';
import { EmailDirective } from './validators/email.directive';
import { SlicePipe } from './pipes/slice.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';

@NgModule({
  declarations: [
    WelcomMsgComponent,
    EmailDirective,
    SlicePipe,
    ElapsedTimePipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    WelcomMsgComponent,
    EmailDirective,
    SlicePipe,
    ElapsedTimePipe,
  ],
})
export class SharedModule {}
