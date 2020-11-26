import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: 'dashboard/setting',
    title: 'Setting',
    icon: 'mdi mdi-image-filter-vintage',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: 'dashboard/invoice',
    title: 'Invoice',
    icon: 'mdi mdi-blur-radial',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: 'dashboard/import',
    title: 'Import',
    icon: 'mdi mdi-poll',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: 'dashboard/export',
    title: 'Export',
    icon: 'mdi mdi-arrange-bring-forward',
    class: '',
    extralink: false,
    submenu: []
  }
];
