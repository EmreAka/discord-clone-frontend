import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  createServerForm: FormGroup

  constructor(
    private serverService: ServerService,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
    this.isModalOpened()
    this.createForm()
  }

  createForm(){
    this.createServerForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(50)]],
      description: ["", [Validators.maxLength(500)]]
    })
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

  addServer(){
    this.serverService.add({
      ...this.createServerForm.value,
      imagePath: "https://res.cloudinary.com/emreaka/image/upload/v1670148447/discord-clone/2048px-.NET_Logo.svg_xcajfn.png"
    }).subscribe({
      next: (value) => {
        this.serverService.closeModal()
      }
    })
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
        }
      }
    }
  }
}
