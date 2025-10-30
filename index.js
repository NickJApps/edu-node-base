import { CColor } from '@miroyar/ccolor';
import User from './render/models/User.js';
import dotenv from 'dotenv';
import Math from "./render/models/Math.js";
import chalk from 'chalk';

// СColor import and test 
const cColor = new CColor();

// Extends 
console.log(cColor.print("Extends class", "BG"));

const user = new User('Ник', 30, 1); 
console.log(user.getAge());
console.log(user.getName());
console.log(user.getUserId());

// Config import and test
console.log(cColor.print("Configuration file", "BG"));

dotenv.config();
console.log(process.env.NODE_ENV); // → development
console.log(process.env.PORT);     // → 4000
console.log(process.env.DB_HOST);  // → localhost

//Math import an test 
console.log(cColor.print("Math class", "BG"));

const math = new Math();
console.log(chalk.red('>>> ') + math.sum(2, 2));