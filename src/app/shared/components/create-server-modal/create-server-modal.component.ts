import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-create-server-modal',
  templateUrl: './create-server-modal.component.html',
  styleUrls: ['./create-server-modal.component.scss']
})
export class CreateServerModalComponent implements OnInit{
  imageSrc: any[]
  files: File[]

  isModalOpen: boolean = false;

  constructor(private serverService: ServerService) {}

  ngOnInit(): void {
    this.isModalOpened()
  }

  isModalOpened(){
    this.serverService.isModalOpened().subscribe({
      next: (value) => {
        this.isModalOpen = value
      }
    })
  }

  closeModal(){
    this.serverService.closeModal()
  }

  onChange(event: any) {
    this.imageSrc = [];
    if (event.target.files) {
      this.files = event.target.files;
      for (const [key, value] of Object.entries(this.files)) {
        // @ts-ignore
        let file: File = this.files[key];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.imageSrc.push(reader.result as string);
          console.log(this.imageSrc)
        }
      }
    }
  }
}
