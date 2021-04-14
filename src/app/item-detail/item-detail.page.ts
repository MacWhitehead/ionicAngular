import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-item-detail",
  templateUrl: "./item-detail.page.html",
  styleUrls: ["./item-detail.page.scss"],
})
export class ItemDetailPage implements OnInit {
  title: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.title = params.get("title");
    });
  }
}
