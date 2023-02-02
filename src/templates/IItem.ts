interface IItem  {
   name: string; 
   image: string; 
   type: string; 
   breed: string; 
   description: string; 
   age: string; 
   inoculations: string[]; 
   diseases: string[]; 
   parasites: string[];
}

export default IItem;