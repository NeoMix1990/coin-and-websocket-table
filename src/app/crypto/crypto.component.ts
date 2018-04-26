import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { Socket } from 'ng-socket-io';


export interface valuta {
	cap24hrChange: any;
	long: any;
	mktcap: number;
	perc: any;
	price: number;
	shapeshift: boolean;
	short: any;
	supply: number;
	usdVolume: number;
	volume: number;
	vwapData: any;
	vwapDataBTC: any;

}

@Component({
	selector: 'app-crypto',
	templateUrl: './crypto.component.html',
	styleUrls: ['./crypto.component.css']
})


export class CryptoComponent implements OnInit {

	public ourCoin: valuta[];
	displayedColumns = ['long', 'mktcap', 'price', 'vwapData', 'supply', 'usdVolume', 'cap24hrChange', 'shapeshift'];
	dataSource: MatTableDataSource<any>  // 

	@ViewChild(MatSort) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */

	ngOnInit() {
		this.getCoin();
		this.getMessage();
	}
	ngAfterViewInit() {

	}

	constructor(
		private userCoin: ConfigService,
		private socket: Socket
	) { }

	rowClicked(row: any): void {
		this.dataSource.sort = this.sort;
	}

	getCoin() {
		this.userCoin.getCoin()
			.subscribe(
				coins => {
					this.ourCoin = coins;
					this.dataSource = new MatTableDataSource(this.ourCoin);
					console.log(this.dataSource)
				}
			);
	}

	getMessage() {
		return this.socket
			.on('trades', update => {
				if (this.ourCoin) {
					for (let el of this.dataSource.data) {
						if (el.short == update.coin) {
							el.price = update.msg.price;
							el.mktcap = update.msg.mktcap;
							break;
						}
					}
				}
			})
	}


}
