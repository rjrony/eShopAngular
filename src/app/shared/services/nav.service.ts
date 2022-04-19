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
			path: '/shop/collection/left/sidebar', title: 'Voorraad', type: 'link', active: false,
		},
		{
			path: '/shop/collection/left/sidebar', title: 'Zitmeubelen', type: 'link', active: false
		},
		{
			path: '/shop/collection/left/sidebar', title: 'Slapen', type: 'link', active: false
		},
		{
			path: '/shop/collection/left/sidebar', title: 'Tafels', type: 'link', megaMenu: true, active: false
		},
		{
			title: 'Kasten', type: 'sub', active: false, children: [
				{ path: '/shop/collection/left/sidebar', title: 'Kledingkast', type: 'link' },
				{ path: '/shop/collection/left/sidebar', title: 'Dressoir', type: 'link' },
				{ path: '/shop/collection/left/sidebar', title: 'Tv-Meubel', type: 'link', badge: true, badgeText: 'new' },
				{ path: '/shop/collection/left/sidebar', title: 'Commodes', type: 'link', badge: true, badgeText: 'new' },
			]
		},
		{
			title: 'Accessoires', type: 'sub', active: false, children: [
				{ path: '/shop/collection/left/sidebar', title: 'Kledingkast', type: 'link' },
				{ path: '/shop/collection/left/sidebar', title: 'Dressoir', type: 'link' },
				{ path: '/shop/collection/left/sidebar', title: 'Tv-Meubel', type: 'link', badge: true, badgeText: 'new' },
				{ path: '/shop/collection/left/sidebar', title: 'Commodes', type: 'link', badge: true, badgeText: 'new' },
			]
		}
	];

	LEFTMENUITEMS: Menu[] = [
		{
			path: '/shop/collection/left/sidebar', title: 'Voorraad', type: 'link', active: false,
		},
		{
			path: '/shop/collection/left/sidebar', title: 'Zitmeubelen', type: 'link', active: false
		},
		{
			path: '/shop/collection/left/sidebar', title: 'Slapen', type: 'link', active: false
		},
		{
			path: '/shop/collection/left/sidebar', title: 'Tafels', type: 'link', megaMenu: true, active: false
		},
		{
			title: 'Kasten', type: 'sub', active: false, children: [
				{ path: '/shop/collection/left/sidebar', title: 'Kledingkast', type: 'link' },
				{ path: '/shop/collection/left/sidebar', title: 'Dressoir', type: 'link' },
				{ path: '/shop/collection/left/sidebar', title: 'Tv-Meubel', type: 'link', badge: true, badgeText: 'new' },
				{ path: '/shop/collection/left/sidebar', title: 'Commodes', type: 'link', badge: true, badgeText: 'new' },
			]
		},
		{
			title: 'Accessoires', type: 'sub', active: false, children: [
				{ path: '/shop/collection/left/sidebar', title: 'Kledingkast', type: 'link' },
				{ path: '/shop/collection/left/sidebar', title: 'Dressoir', type: 'link' },
				{ path: '/shop/collection/left/sidebar', title: 'Tv-Meubel', type: 'link', badge: true, badgeText: 'new' },
				{ path: '/shop/collection/left/sidebar', title: 'Commodes', type: 'link', badge: true, badgeText: 'new' },
			]
		}
	];

	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
	leftMenuItems = new BehaviorSubject<Menu[]>(this.LEFTMENUITEMS);

}
