import { Component, OnInit, ViewChild } from '@angular/core';
import { async } from '@angular/core/testing';
import { IonInfiniteScroll, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.page.html',
  styleUrls: ['./test2.page.scss'],
})
export class Test2Page implements OnInit {

  items = [];
  series = [];
  cuenta: number = 0;
  
  // numTimesLeft = 1;

  componentes: Observable<Componente[]>;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private dataService: DataService,public loadingController: LoadingController) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
    this.dataService.getSerie().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        this.series.push(res[i]);
      }
      this.addMoreItems();
    });
  }

   loadData(event) {
    setTimeout(() => {
      console.log('Done');
      this.addMoreItems();
      // this.numTimesLeft -= 1;
      event.target.complete();
      console.log(this.series.length, this.cuenta)
      if (this.series.length === this.cuenta) {event.target.disabled = true; console.log("disabled")};
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  addMoreItems() {
    for (let i = 0; i < 4; i++) {
      if (this.series.length === this.cuenta) return;
      this.items.push(this.series[this.cuenta]);
      this.cuenta++;
    }
  }

}
