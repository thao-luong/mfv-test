import { Component, Input } from '@angular/core';

import {
  projectId,
  backendUrlForInfo,
} from '../../utils/fixtures';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() projectId: any;
  @Input() backendUrlForInfo: any;

  constructor () {
      this.projectId = projectId;
      this.backendUrlForInfo = backendUrlForInfo;
  }
}
