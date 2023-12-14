export class CustomersModel {



    constructor(
       
	 	public  customerId:any,
         public  firstName: String,
         public  lastName:String,
         public  gender: any,
         public  yearOfBirth:Number,
         public  maritalStatus:String,
         public  streetAddress:String,
         public  postalCode: String,
         public  city: String,
         public cityId: Number ,
         public  stateProvince: String,
         public  stateProvinceId:Number,
         
         public  countryId:Number,

         public  countryIsoCode:String,
         public  countryName:String,

         public countrySubregion: String,

         public  countrySubregionId :Number,
         public  countryRegion : String ,

         public  countryRegionId:Number,

         public  countryTotal : String,

         public  countryTotalId:Number, 
         public  mainPhone: String,
         public  income: String,
         public creditLimit:Number,
         public  email: String
        
 
        ) {}
    
}
