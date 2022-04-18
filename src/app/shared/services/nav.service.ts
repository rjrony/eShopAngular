import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Menu
export interface Menu {
	path?: string;
	title?: string;
	type?: string;
	megaMenu?: boolean;
	image?: string;
	active?: boolean;
	badge?: boolean;
	badgeText?: string;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	constructor() { }

	public screenWidth: any;
	public leftMenuToggle: boolean = false;
	public mainMenuToggle: boolean = false;

	// Windows width
	@HostListener('window:resize', ['$event'])
	onResize(event?) {
		this.screenWidth = window.innerWidth;
	}

	MENUITEMS: Menu[] = [
		{
			title: 'Voorraad', type: 'sub', active: false
		},
		{
			title: 'Zitmeubelen', type: 'sub', active: false
		},
		{
			title: 'Slapen', type: 'sub', active: false
		},
		{
			title: 'Tafels', type: 'sub', megaMenu: true, active: false
		},
		{
			title: 'Kasten', type: 'sub', active: false, children: [
				{ path: '/pages/Kledingkast', title: 'Kledingkast', type: 'link' },
				{ path: '/pages/Dressoir', title: 'Dressoir', type: 'link' },
				{ path: '/pages/Tv-Meubel', title: 'Tv-Meubel', type: 'link', badge: true, badgeText: 'new' },
				{ path: '/pages/Commodes', title: 'Commodes', type: 'link', badge: true, badgeText: 'new' },
			]
		},
		{
			title: 'Accessoires', type: 'sub', active: false, children: [
				{ path: '/pages/Kledingkast', title: 'Kledingkast', type: 'link' },
				{ path: '/pages/Dressoir', title: 'Dressoir', type: 'link' },
				{ path: '/pages/Tv-Meubel', title: 'Tv-Meubel', type: 'link', badge: true, badgeText: 'new' },
				{ path: '/pages/Commodes', title: 'Commodes', type: 'link', badge: true, badgeText: 'new' }
			]
		}
	];

	LEFTMENUITEMS: Menu[] = [
		{
			title: 'Voorraad', type: 'sub', active: false
		},
		{
			title: 'Zitmeubelen', type: 'sub', active: false
		},
		{
			title: 'Slapen', type: 'sub', active: false
		},
		{
			title: 'Tafels', type: 'sub', megaMenu: true, active: false
		},
		{
			title: 'Kasten', type: 'sub', active: false, children: [
				{ path: '/pages/Kledingkast', title: 'Kledingkast', type: 'link' },
				{ path: '/pages/Dressoir', title: 'Dressoir', type: 'link' },
				{ path: '/pages/Tv-Meubel', title: 'Tv-Meubel', type: 'link', badge: true, badgeText: 'new' },
				{ path: '/pages/Commodes', title: 'Commodes', type: 'link', badge: true, badgeText: 'new' },
			]
		},
		{
			title: 'Accessoires', type: 'sub', active: false, children: [
				{ path: '/pages/Kledingkast', title: 'Kledingkast', type: 'link' },
				{ path: '/pages/Dressoir', title: 'Dressoir', type: 'link' },
				{ path: '/pages/Tv-Meubel', title: 'Tv-Meubel', type: 'link', badge: true, badgeText: 'new' },
				{ path: '/pages/Commodes', title: 'Commodes', type: 'link', badge: true, badgeText: 'new' }
			]
		}
	];

	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
	leftMenuItems = new BehaviorSubject<Menu[]>(this.LEFTMENUITEMS);

}
