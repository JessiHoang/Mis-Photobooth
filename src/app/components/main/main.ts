import { Component, ElementRef, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrls: ['./main.scss'],
})
export class MainComponent {
  @ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>;

  stream: MediaStream | null = null;

  async startCamera() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });

      this.videoRef.nativeElement.srcObject = this.stream;
      await this.videoRef.nativeElement.play();
    } catch (error) {
      console.error('Kamera konnte nicht gestartet werden:', error);
      alert('Kamera konnte nicht gestartet werden. Bitte erlaube Zugriff auf die Kamera und verwende eine sichere Verbindung.');
    }
  }

  openGallery() {
    console.log("Gallery clicked");
  }
}
