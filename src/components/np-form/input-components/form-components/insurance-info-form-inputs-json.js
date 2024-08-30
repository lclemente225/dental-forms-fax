const primaryInsurance1 = [
    {
        title:'Name of Insured',
        name:'insuranceHolderName'
    },
    {
        title:'Relationship to Patient',
        name:'insuranceHolderRelationToPatient'
    },
    {
        title:'Birth Date',
        name:'insuranceHolderBirthDate'
    },
    {
        title:'Social Security Number(Optional: It helps us in retrieving your insurance benefits)',
        name:'insuranceHolderSSN'
    }
]

const insuredPatientInfo = [
    {
        title:'Address',
        name:'insuredPatientAddress',
        required: true
    },
    {
        title:'City',
        name:'insuredPatientCity',
        required: true
    }
    , 
    {
        title:'Zip Code',
        name:'insuredPatientZipCode',
        type:'zipCode',
        pattern:'[0-9]*',
        required: true
    },

]

const primaryInsuranceEmployerInfo = [
    {
        title:'Name of Employer',
        name:'insuranceHolderEmployer'
    },
    {
        title:'City',
        name:'insuranceHolderEmployerCity'
    },
    {
        title:'Zip Code',
        name:'employerZipCode',
        type:'zipCode',
        pattern:'[0-9]*'
    }
]

const primaryInsuranceInfo = [
    {
        title:'Insurance Company Name', 
        name:'primaryInsuranceCompanyName'
    },
    {
        title:'Insurance Company Address',
        name:'primaryInsuranceCompanyAddress'
    },
    {
        title:'Group Number',
        name:'primaryInsuranceHolderGroupNum',
        type:'number'
    },
    {
        title:'Policy ID / Member ID',
        name:'primaryInsuranceHolderPolicyID',
        type:'number'
    },
    {
        title:'Zip Code',
        name:'primaryInsuranceZipCode',
        type:'zipCode',
        pattern:'[0-9]*'
    },
    {
        title:'Insurance Phone Num',
        name:'primaryInsurancePhone'
    },
    {
        title:'How Much is your Deductible?',
        name:'primaryInsuranceDeductible',
        type:'number'
    },
    {
        title:'How much have you used?',
        name:'primaryInsuranceDeducibleUsed',
        type:'number'
    },
    {
        title:'Max Annual Benefit',
        name:'primaryInsuranceBenefit',
        type:'number'
    }
]

const secondaryInsuranceInfo = [
    {
        title:'Insurance Company Name', 
        name:'secondaryInsuranceCompanyName'
    },
    {
        title:'Insurance Company Address',
        name:'secondaryInsuranceCompanyAddress'
    },
    {
        title:'Group Number',
        name:'secondaryInsuranceHolderGroupNum',
        type:'number'
    },
    {
        title:'Policy ID / Member ID',
        name:'secondaryInsuranceHolderPolicyID',
        type:'number'
    },
    {
        title:'Zip Code',
        name:'secondaryInsuranceZipCode',
        type:'zipCode',
        pattern:'[0-9]*'
    },
    {
        title:'Insurance Phone Num',
        name:'secondaryInsurancePhone'
    },
    {
        title:'How Much is your Deductible?',
        name:'secondaryInsuranceDeductible',
        type:'number'
    },
    {
        title:'How much have you used?',
        name:'secondaryInsuranceDeducibleUsed',
        type:'number'
    },
    {
        title:'Max Annual Benefit',
        name:'secondaryInsuranceBenefit',
        type:'number'
    }
]



export { insuredPatientInfo, 
        primaryInsurance1, 
        primaryInsuranceEmployerInfo, 
        primaryInsuranceInfo, 
        secondaryInsuranceInfo }
