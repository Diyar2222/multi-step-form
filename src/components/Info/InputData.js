export const inputs = [{
    id:1,
    type:'text',
    placeholder:'e.g. Diyar',
    title:'Name', 
    name:'name',
    pattern:'^[A-Za-z0-9]{3,16}',
    errorMessage:'Name should be 3 to 16 characters without special characters'
  },
  {
    id:2,
    type:'email',
    placeholder:'e.g. diyar@gmail.com',
    title:'Email', 
    name:'email',
    errorMessage:'It should be valid email address'
  },
  {
    id:3,
    type:'number',
    placeholder:'e.g. +7 775 981 0921',
    title:'Phone Number',
    name:'phoneNum',
    errorMessage:'Required field',
  }
]