import { NotePage } from './../pages/note/note';
import { CardDetailPage } from './../pages/card-detail/card-detail';
import { DumyVideosPage } from './../pages/dumy-videos/dumy-videos';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { ExpensesForm } from '../pages/expenses/expenses';
import { ExpensesDetailsPage } from '../pages/expenses-detail/expenses-detail';
import { DetailForm } from '../pages/detail-form/detail-form';


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ExpensesForm,
    ExpensesDetailsPage,
    DetailForm,
    DumyVideosPage,
    CardDetailPage,
    NotePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ExpensesForm,
    ExpensesDetailsPage,
    DetailForm,
    DumyVideosPage,
    CardDetailPage,
    NotePage
  ],
  providers: []
})
export class AppModule {}
