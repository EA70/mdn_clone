// On exporte les interfaces pour pouvoir les réutiliser ailleurs si besoin
export interface NavLink {
  label: string;
  to: string;
}

export interface NavSection {
  section: string;
  links: NavLink[];
}