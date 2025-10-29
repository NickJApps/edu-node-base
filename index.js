import { CColor } from '@miroyar/ccolor';
import User from './render/models/User.js';


const cColor = new CColor();
const user = new User('Ник', 30, 1); 

console.log(cColor.print("application is running", "BG"));

console.log(user.getAge());
console.log(user.getName());
console.log(user.getUserId());
