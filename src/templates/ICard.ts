interface ICard  {

   name: string|undefined; 
   img: string; 
   type: string; 
   breed: string; 
   description: string; 
   age: string; 
   inoculations: string[]; 
   diseases: string[]; 
   parasites: string[];
  // [key: string]: any
  
}

export default ICard;