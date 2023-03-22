import { Component, Input } from '@angular/core';
import { Pilota } from './pilota.module';

@Component({
  selector: 'app-pilota',
  templateUrl: './pilota.component.html',
  styleUrls: ['./pilota.component.css']
})
export class PilotaComponent {
@Input() pil !: Pilota;
}
