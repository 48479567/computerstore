import { CategorySchema } from 'src/app/shared/models/schema/category/category.schema';

export const categories: CategorySchema[] = [
  new CategorySchema(1, 'Computer', 10, 150, 'https://i.imgur.com/yCkxBe3.png', '', new Date()),
  new CategorySchema(2, 'Mouse', 5, 150, 'https://i.imgur.com/boLV7nu.png', '', new Date()),
  new CategorySchema(3, 'Hard Disk', 12, 480, 'https://i.imgur.com/lz3OuI1.png', '', new Date()),
  new CategorySchema(4, 'Keyboard', 21, 300, 'https://i.imgur.com/6jF7kYF.png', '', new Date()),
  new CategorySchema(5, 'Mainboard', 10, 150, 'https://i.imgur.com/OZszbMi.png', '', new Date()),
  new CategorySchema(6, 'Case', 11, 142, 'https://i.imgur.com/GizQkzs.png', '', new Date()),
  new CategorySchema(7, 'Video Card', 10, 450, 'https://i.imgur.com/Ij8MdUo.png', '', new Date()),
  new CategorySchema(8, 'Monitor', 12, 150, 'https://i.imgur.com/5nmCOfw.png', '', new Date()),
  new CategorySchema(9, 'Cooling', 35, 500, 'https://i.imgur.com/c3hC7hi.png', '', new Date()),
  new CategorySchema(10, 'RAM', 25, 650, 'https://i.imgur.com/28VR7u7.png', '', new Date()),
  new CategorySchema(11, 'CPU', 26, 220, 'https://i.imgur.com/DoOkWf0.png', '', new Date()),
  new CategorySchema(12, 'Laptop', 54, 145, 'https://i.imgur.com/yEKB3RH.png', '', new Date()),
];
