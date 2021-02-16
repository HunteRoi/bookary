import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  async emitSoundNotifAsync() {
    const audio = new Audio();
    audio.src = 'assets/beep.wav';
    audio.load();

    await audio.play();
    await audio.play();
  }
}
