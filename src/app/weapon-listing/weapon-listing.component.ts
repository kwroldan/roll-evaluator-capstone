import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weapon-listing',
  templateUrl: './weapon-listing.component.html',
  styleUrls: ['./weapon-listing.component.scss']
})
export class WeaponListingComponent {
  @Input() name!: string;
  @Input() imageUrl!: string;
  @Input() preferredCombo!: string;
}
