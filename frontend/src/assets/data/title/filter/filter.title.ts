import { FilterToggle } from 'src/app/shared/models';

export const filtersSources: FilterToggle[] = [
  new FilterToggle('Products', 'product'),
  new FilterToggle('Personal', 'personal'),
  new FilterToggle('Sets', 'sets'),
  new FilterToggle('Sales', 'sales'),
  new FilterToggle('Stock', 'stock'),

];

export const filtersCharts: FilterToggle[] = [
  new FilterToggle('Line', 'line'),
  new FilterToggle('Bar', 'bar'),
  new FilterToggle('Radar', 'radar'),
  new FilterToggle('Pie', 'pie'),
  new FilterToggle('Doughnut', 'doughnut'),
  new FilterToggle('Polar Area', 'polarArea'),
  new FilterToggle('Bubble', 'bubble'),
  new FilterToggle('Scatter', 'scatter'),
];

