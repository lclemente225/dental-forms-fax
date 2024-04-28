
//text inputs
const patientInfo = [
    {
        title:'First Name',
        name:'firstName',
        required: true
    }, 
    {
        title:'Last Name',
        name:'lastName',
        required: true
    },
    {
        title:'Address',
        name:'address',
        required: true
    },
    {
        title:'City',
        name:'city',
        required: true
    }
    , 
    {
        title:'Zip Code',
        name:'zipCode',
        type:'zipCode',
        pattern:'[0-9]*',
        required: true
    },

]

const schoolLocationInfo = [
    {
        title:'If Student, Name of School/College',
        name:'schoolName'
    },
    {
        title:'City',
        name:'schoolCity'
    }
]

const employerInfo = [
    {
        title:'Patient or Parent/Guardian Employer',
        name:'employerName'
    },
    {
        title:'Work Phone',
        name:'employerPhone'
    },
    {
        title:'Business Address',
        name:'employerAddress'
    },
    {
        title:'Business City',
        name:'employerCity'
    },
    {
        title:'Business Zip Code',
        name:'employerZipCode',
        type:'zipCode',
        pattern:'[0-9]*'
    }
]

const employeeInfo = [
    {
        title:'Spouse or Parent/Guardian',
        name:'employeeName'
    },
    {
        title:'Employer',
        name:'employeeEmployer'
    },
    {
        title:'Work Phone',
        name:'employeePhone'
    },
    {
        title:'Whom may we thank for referring you?',
        name:'referralName'
    },
    {
        title:'Emergency Contact Name',
        name:'emergencyContactName'
    },
    {
        title:'Emergency Contact Phone',
        name:'emergencyContactPhone'
    },
    {
        title:'Relationship to Patient',
        name:'relationshipToPatient'
    },
    {
    }
]

const responsibleParty = [
    {
        title:'FirstName',
        name:'responsiblePartyFirstName'
    },
    {
        title:'Last Name',
        name:'responsiblePartyLastName'
    },
    {
        title:'Address',
        name:'responsiblePartyAddress'
    },
    {
        title:'City',
        name:'responsiblePartyCity'
    },
    {
        title:'Zip Code',
        name:'responsiblePartyZipCode',
        pattern:'[0-9]*'
    }
]

//radio inputs
const maritalStatus = [
    {
        title: 'Minor',
        id:'minor',
        name: 'maritalStatus',
        className:'marital-status-label',
        type:'radio'

    },
    {
        title: 'Single',
        id:'single',
        name: 'maritalStatus',
        className:'marital-status-label',
        type:'radio'
    },
    {
        title: 'Married',
        id:'married',
        name: 'maritalStatus',
        className:'marital-status-label',
        type:'radio'
    },
    {
        title: 'Divorced',
        id:'divorced',
        name: 'maritalStatus',
        className:'marital-status-label',
        type:'radio'
    },
    {
        title: 'Widowed',
        id:'widowed',
        name: 'maritalStatus',
        className:'marital-status-label',
        type:'radio'
    },
    {
        title: 'Separated',
        id:'separated',
        name: 'maritalStatus',
        className:'marital-status-label',
        type:'radio'
    }
]

const schoolStatus = [
    {
        title:'Full Time',
        id:'schoolFullTime',
        name:'schoolStatus',
        className:'school-status',
        type:'radio'
    },
    {
        title:'Part Time',
        id:'schoolPartTime',
        name:'schoolStatus',
        className:'school-status',
        type:'radio'
    }
]



export { patientInfo, maritalStatus, schoolLocationInfo, schoolStatus, employerInfo, employeeInfo, responsibleParty }