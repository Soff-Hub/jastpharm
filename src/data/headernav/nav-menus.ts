
interface MenuItem {
  id: number;
  label: string;
  link: string;
  lastItem?: string;
  hasDropdown?: boolean;
  subMenu?: MenuItem[];
  translateKey: string
}

const navMenuData: MenuItem[] = [
  {
    id: 1,
    label: "Asosiy",
    link: "/",
    translateKey: 'main'
  },
  {
    id: 2,
    hasDropdown: false,
    label: "Katalog",
    link: "/shop",
    translateKey: 'catalog'
  },
  {
    id: 3,
    label: "Biz haqimizda",
    link: "#",
    hasDropdown: true,
    translateKey: "ourAbout",
    subMenu: [
      { id: 6, hasDropdown: false, label: "Tariximiz", link: "/history", translateKey: 'ourHistory' },
      { id: 7, hasDropdown: false, label: "Vazifamiz", link: "/mission", translateKey: 'ourMission' },
      // { id: 8, hasDropdown: false, label: "Hamkorlarimiz", link: "/partners", translateKey: 'ourPartners' },
      { id: 9, hasDropdown: false, label: "Jamoamiz", link: "/about", translateKey: 'ourTeam' },
    ]
  },
  // { id: 5, hasDropdown: false, lastItem: "mr-0", label: "Xizmatlar", link: "/services", translateKey: 'services' },
  { id: 6, hasDropdown: false, lastItem: "mr-0", label: "Blog", link: "/blog", translateKey: 'blog' },
  { id: 7, hasDropdown: false, lastItem: "mr-0", label: "Aloqa", link: "/contact", translateKey: 'contact' },

];

export default navMenuData;
