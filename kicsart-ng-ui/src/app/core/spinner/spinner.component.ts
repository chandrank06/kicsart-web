import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  showSpinner: boolean = false;
  loadingSubscription: Subscription;
  constructor(private spinnerService: SpinnerService) {
    this.loadingSubscription = new Subscription();
    this.loadingSubscription = this.spinnerService.loadingStatus.subscribe(
      (status: boolean) => {
        this.showSpinner = status;
      }
    );
  }
  ngOnInit(): void {}
  ngDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}
