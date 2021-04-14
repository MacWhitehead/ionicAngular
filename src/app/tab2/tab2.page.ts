import { Component } from "@angular/core";
import { ActionSheetController } from "@ionic/angular";
import { Photo, PhotoService } from "../services/photo.service";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  items = [
    {
      title: "Numbah 1",
      photo:
        "https://images.pexels.com/photos/40984/animal-ara-macao-beak-bird-40984.jpeg?cs=srgb&dl=pexels-public-domain-pictures-40984.jpg&fm=jpg",
    },
    {
      title: "Numbah 2",
      photo:
        "https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      title: "Numbah 3",
      photo:
        "https://images.pexels.com/photos/76957/tree-frog-frog-red-eyed-amphibian-76957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ];

  constructor(
    public photoService: PhotoService,
    public actionSheetController: ActionSheetController 
  ) {}

  async ngOnInit() {
    await this.photoService.loadSaved();

  }

  public async showActionSheet(photo: Photo, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: "Photos",
      buttons: [
        {
          text: "Delete",
          role: "destructive",
          icon: "trash",
          handler: () => {
            this.photoService.deletePicture(photo, position);
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            // Nothing to do, action sheet is automatically closed
          },
        },
      ],
    });
    await actionSheet.present();
  }

}
