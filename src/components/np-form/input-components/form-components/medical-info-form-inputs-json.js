const physicianInfo = [{
    title:'Physician',
    name:'physicianName'
},
{
    title:'Office Phone',
    name:'physicianPhoneNum'
},
{
    title:'Date of Last Exam',
    name:'dateLastExam',
    type:'date'
}
]

const generalMedicalQ = [{
    title:'1. Are you under medical treatment now?',
    name:'currentMedicalTreatment',
    type:'checkbox'
},
{
    title:'2. Have you ever been hospitalized for any surgical operation or serious illness within the last 5 years?',
    name:'recentSurgery',
    type:'checkbox'
},
{
    title:'If yes, please explain',
    name:'explainSurgery',
},
{
    title:'3. Are you taking medication',
    name:'currentMedication',
    type:'checkbox'
},
{
    title:'If yes, what medication are you taking?',
    name:'medicationList'
},
{
    title:'4. Have you ever taken Fen-Phen/Redux?',
    name:'fenRedux',
    type:'checkbox'
},
{
    title:'5. Do you use tobacco?',
    name:'tobaccoUser',
    type:'checkbox'
},
{
    title:'6. Do you use controlled substances',
    name:'controlledSubstanceUser',
    type:'checkbox'
},
{
    title:'7. Are you wearing contact lenses?',
    name:'contactLensUser',
    type:'checkbox'
},
{
    title:'8. Do you have persistent cough or throat clearing not associated with a known illness (lasting more then 3 weeks)?',
    name:'coughNoIllness',
    type:'checkbox'
}]

const womenOnly = [{
    title:'Are you pregnant or think you may be?',
    name:'pregnant',
    type:'checkbox'
},
{
    title:'Are you nursing?',
    name:'nursing',
    type:'checkbox'
},
{
    title:'Are you taking oral contraceptives?',
    name:'oralContraceptives',
    type:'checkbox'
}]

const medicalConditionList = [
    {
        title:'High Blood Pressure',
        name:'highBloodPressure',
        type:'checkbox'
    },
    {
        title:'Heart Attack',
        name:'heartAttack',
        type:'checkbox'
    },
    {
        title:'Rheumatic Fever',
        name:'rheumaticFever',
        type:'checkbox'
    },
    {
        title:'Swollen Ankles',
        name:'swollenAnkles',
        type:'checkbox'
    },
    {
        title:'Fainting / Seizures',
        name:'faintingSeizures',
        type:'checkbox'
    },
    {
        title:'Asthma',
        name:'asthma',
        type:'checkbox'
    },
    {
        title:'Low Blood Pressure',
        name:'lowBloodPressure',
        type:'checkbox'
    },
    {
        title:'Epilepsy / Convulsions',
        name:'epilepsyConvulsions',
        type:'checkbox'
    },
    {
        title:'Leukemia',
        name:'leukemia',
        type:'checkbox'
    },
    {
        title:'Diabetes',
        name:'diabetes',
        type:'checkbox'
    },
    {
        title:'Kidney Diseases',
        name:'kidneyDiseases',
        type:'checkbox'
    },
    {
        title:'AIDS or HIV Infection',
        name:'aidsHIV',
        type:'checkbox'
    },
    {
        title:'Thyroid Problem',
        name:'thyroidProblem',
        type:'checkbox'
    },
    {
        title:'Heart Disease',
        name:'heartDisease',
        type:'checkbox'
    },
    {
        title:'Cardiac Pacemaker',
        name:'cardiacPacemaker',
        type:'checkbox'
    },
    {
        title:'Heart Murmur',
        name:'heartMurmur',
        type:'checkbox'
    },
    {
        title:'Angina',
        name:'angina',
        type:'checkbox'
    },
    {
        title:'Frequently Tired',
        name:'frequentlyTired',
        type:'checkbox'
    },
    {
        title:'Anemia',
        name:'anemia',
        type:'checkbox'
    },
    {
        title:'Emphysema',
        name:'emphysema',
        type:'checkbox'
    },
    {
        title:'Cancer',
        name:'cancer',
        type:'checkbox'
    },
    {
        title:'Arthritis',
        name:'arthritis',
        type:'checkbox'
    },
    {
        title:'Joint Replacement or Implant',
        name:'jointReplacement',
        type:'checkbox'
    },
    {
        title:'Hepatitis / Jaundice',
        name:'hepatitisJaundice',
        type:'checkbox'
    },
    {
        title:'Sexually Transmitted Disease',
        name:'STD',
        type:'checkbox'
    },
    {
        title:'Stomach Trouble / Ulcers',
        name:'stomachTroubleUlcer',
        type:'checkbox'
    },
    {
        title:'Chest Pains',
        name:'chestPain',
        type:'checkbox'
    },
    {
        title:'Easily Winded',
        name:'easilyWinded',
        type:'checkbox'
    },
    {
        title:'Stroke',
        name:'stroke',
        type:'checkbox'
    },
    {
        title:'Hay Fever / Allergies',
        name:'hayFeverAllergies',
        type:'checkbox'
    },
    {
        title:'Tuberculosis',
        name:'tuberculosis',
        type:'checkbox'
    },
    {
        title:'Radiation Therapy',
        name:'radiationTherapy',
        type:'checkbox'
    },
    {
        title:'Glaucoma',
        name:'glaucoma',
        type:'checkbox'
    },
    {
        title:'Recent Weight Loss',
        name:'recentWeightLoss',
        type:'checkbox'
    },
    {
        title:'Liver Disease',
        name:'liverDisease',
        type:'checkbox'
    },
    {
        title:'Heart Trouble',
        name:'heartTrouble',
        type:'checkbox'
    },
    {
        title:'Respiratory Problems',
        name:'respiratoryProblems',
        type:'checkbox'
    },
    {
        title:'Mitral Valve Prolapse',
        name:'mitralValveProlapse',
        type:'checkbox'
    },
    {
        title:'Other',
        name:'otherMedicalConditions'
    }
]
export {physicianInfo, generalMedicalQ, womenOnly, medicalConditionList}