//text inputs
const patientInfo = [
    {
        title:'First Name',
        name:'firstName'
    }, 
    {
        title:'Last Name',
        name:'lastName'
    },
    {
        title:'Address',
        name:'address'
    },
    {
        title:'City',
        name:'city'
    }
    , 
    {
        title:'Zip Code',
        name:'zipCode'
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
        name:'employerZipCode'
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

//radio inputs
const maritalStatus = [
    {
        title: 'Minor',
        id:'minor',
        name: 'maritalStatus',
        className:'marital-status-label'
    },
    {
        title: 'Single',
        id:'single',
        name: 'maritalStatus',
        className:'marital-status-label'
    },
    {
        title: 'Married',
        id:'married',
        name: 'maritalStatus',
        className:'marital-status-label'
    },
    {
        title: 'Divorced',
        id:'divorced',
        name: 'maritalStatus',
        className:'marital-status-label'
    },
    {
        title: 'Widowed',
        id:'widowed',
        name: 'maritalStatus',
        className:'marital-status-label'
    },
    {
        title: 'Separated',
        id:'separated',
        name: 'maritalStatus',
        className:'marital-status-label'
    }
]

const schoolStatus = [
    {
        title:'Full Time',
        id:'schoolFullTime',
        name:'schoolStatus',
        className:'school-status'
    },
    {
        title:'Part Time',
        id:'schoolPartTime',
        name:'schoolStatus',
        className:'school-status'
    }
]

export { patientInfo, maritalStatus, schoolLocationInfo, schoolStatus, employerInfo, employeeInfo }