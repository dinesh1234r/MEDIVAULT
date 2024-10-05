const mongoose=require('mongoose')

const PatientScheme=new mongoose.Schema({
    Name:String,
    Aadhar:String,
    Address:String,
    DOB:String,
    Mobile_no:String,
    Photo:String,
    History:[{
        disease:String,
        notes:String,
        vitals:{},
        Date:String,
        Doctor:String,
        report:{ type: Object, default: {} } ,
        preciption:[]
    }]
})

module.exports=mongoose.model('PatientsSchemas',PatientScheme);