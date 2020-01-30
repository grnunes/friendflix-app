import { NgModule } from '@angular/core';
import { PostComponent } from './components/post/post.component';
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [PostComponent],
  exports: [PostComponent],
  imports: [IonicModule]
})

export class ComponentsModule{}
