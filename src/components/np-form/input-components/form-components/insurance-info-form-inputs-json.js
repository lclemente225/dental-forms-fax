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
        title:'Social Security Number',
        name:'insuranceHolderSSN'
    }
]

const primaryInsuranceEmployerInfo = [
    {
        title:'Name of Employer',
        name:'insuranceHolderEmployer'
    },
    {
        title:'City',
        name:'insuranceHolderEmployerCity'
    }
]

const primaryInsuranceInfo = [
    {
        title:'Insurance Company Name', 
        name:'insuranceCompanyName'
    },
    {
        title:'Insurance Company Address',
        name:'insuranceCompanyAddress'
    },
    {
        title:'Group Number',
        name:'insuranceHolderGroupNum',
        type:'number'
    },
    {
        title:'Policy ID / Member ID',
        name:'insuranceHolderPolicyID',
        type:'number'
    }
]

export { primaryInsurance1, primaryInsuranceEmployerInfo, primaryInsuranceInfo }
