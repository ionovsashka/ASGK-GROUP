import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, ElementRef,
  forwardRef,
  HostListener,
  Input,
  ViewChild
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NgControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  public value: string | undefined
  @Input() id!: string
  @Input() text!: string
  @Input() placeholder!: string
  @Input() itsPassword: boolean = false
  @Input() showPassword!: boolean
  private onChange!: (value: string) => void;
  private onTouched!: () => void;

  constructor(private readonly changeDetector: ChangeDetectorRef) {
  }

  ngOnInit(){
  }

  public onInputValueChange(event: Event) {
    const target = event.target as HTMLInputElement
    const value = target.value
    this.onChange(value)
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }

  public writeValue(value: string): void {
    this.value = value
    this.changeDetector.detectChanges()
  }

  public blurInput() {
    this.onTouched()
  }
}
