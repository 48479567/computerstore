import { CategorySchema } from 'src/app/shared/models/schema/category/category.schema';

export const categories: CategorySchema[] = [
  new CategorySchema('Computer', 10, 150, 400, 'https://i.imgur.com/yCkxBe3.png', '', new Date()),
  new CategorySchema('Mouse', 5, 150, 400, 'https://i.imgur.com/boLV7nu.png', '', new Date()),
  new CategorySchema('Hard Disk', 12, 480, 400, 'https://i.imgur.com/lz3OuI1.png', '', new Date()),
  new CategorySchema('Keyboard', 21, 300, 400, 'https://i.imgur.com/6jF7kYF.png', '', new Date()),
  new CategorySchema('Mainboard', 10, 150, 400, 'https://i.imgur.com/OZszbMi.png', '', new Date()),
  new CategorySchema('Case', 11, 142, 400, 'https://i.imgur.com/GizQkzs.png', '', new Date()),
  new CategorySchema('Video Card', 10, 450, 400,  'https://i.imgur.com/Ij8MdUo.png', '', new Date()),
  new CategorySchema('Monitor', 12, 150, 400, 'https://i.imgur.com/5nmCOfw.png', '', new Date()),
  new CategorySchema('Cooling', 35, 500, 400, 'https://i.imgur.com/c3hC7hi.png', '', new Date()),
  new CategorySchema('RAM', 25, 650, 400, 'https://i.imgur.com/28VR7u7.png', '', new Date()),
  new CategorySchema('CPU', 26, 220, 400, 'https://i.imgur.com/DoOkWf0.png', '', new Date()),
  new CategorySchema('Laptop', 54, 145, 400, 'https://i.imgur.com/yEKB3RH.png', '', new Date()),

];
