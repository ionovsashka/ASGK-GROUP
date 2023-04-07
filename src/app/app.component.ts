import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {LoaderService} from "./shared/services/loader/loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  loading$: Observable<boolean> = this.loaderService.loading$

  constructor(private loaderService: LoaderService, private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    this.changeDetector.detectChanges()
  }
}
