export type NavMenuConfig = {
    collectionNav: NavMenuItemList;
    aboutNav: NavMenuItem;
    contactNav: NavMenuItem;
}

export type NavMenuItemList = {
    title: string;
    link: string;
    items: NavMenuItem[];
}

export type NavMenuItem = {
    title: string;
    description?: string;
    link: string;
}