import {Injectable} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OpenModalService {
  openThisModal = false;
  openOtherTab = false;
}
