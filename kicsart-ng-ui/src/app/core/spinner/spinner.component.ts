import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { Subscription } from 'rxjs/dist/types/internal/Subscription';

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
  }
  ngOnInit(): void {
    this.loadingSubscription = this.spinnerService.loadingStatus.subscribe(
      (status: boolean) => {
        this.showSpinner = status;
      }
    );
  }
  ngDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}
