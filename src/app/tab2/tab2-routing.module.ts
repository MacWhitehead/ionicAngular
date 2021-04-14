import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailPage } from '../item-detail/item-detail.page';
import { Tab2Page } from './tab2.page';
const routes: Routes = [
  {
    path: 'tab2',
    component: Tab2Page,
  },
  {
    path: 'detail/:title',
    component: ItemDetailPage
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}