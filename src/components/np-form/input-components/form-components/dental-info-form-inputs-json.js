const prevDentist = [{
    title:'Name of Previous Dentist',
    name:'prevDentistName'
},
{
    title:'Location of Previous Dentist',
    name:'prevDentistLocation'
},
{
    title:'Date of Last Exam',
    name:'lastDentalExam',
    type:'date'
}]

const dentalHistoryList = [{
    title:'1. Do your gums bleed while brushing or flossing?',
    name:'gumsBleed',
    type:'checkbox'
},
{
    title:'2. Are your teeth sensitive to hot or cold liquids / foods?',
    name:'hotColdSensitiveTeeth',
    type:'checkbox'
},
{
    title:'3. Are your teeth sensitive to sweet or sour liquids / foods?',
    name:'sweetSourSensitiveTeeth',
    type:'checkbox'
},
{
    title:'4. Do you feel pain to any of your teeth?',
    name:'toothPain',
    type:'checkbox'
},
{
    title:'5. Do you have any sores or lumps in or near your mouth?',
    name:'soresLumpsMouth',
    type:'checkbox'
},
{
    title:'6. Have you had any head, neck or jaw injuries?',
    name:'headNeckJawInjuries',
    type:'checkbox'
},{
    title:'7. Do you have frequent headaches?',
    name:'frequentHeadaches',
    type:'checkbox'
},
{
    title:'8. Do you clench or grind your teeth?',
    name:'clenchGrindTeeth',
    type:'checkbox'
},
{
    title:'9. Do you bite your lips or cheeks frequently?',
    name:'biteLipsCheeks',
    type:'checkbox'
},{
    title:'10. Have you ever had any difficult extractions in the past?',
    name:'difficultExtractions',
    type:'checkbox'
},
{
    title:'11. Have you ever had any prolonged bleeding following extractions?',
    name:'prolongedBleedingAfterExtraction',
    type:'checkbox'
},
{
    title:'12. Have you had any orthodontic treatment?',
    name:'orthoTreatment',
    type:'checkbox'
},{
    title:'13. Do you wear dentures or partials?',
    name:'denturesPartials',
    type:'checkbox'
},
{
    title:'If yes, date of placement',
    name:'denturePartialPlacement',
    type:'date'
},
{
    title:'14. Have you ever received oral hygiene instructions regarding the care of your teeth and gums?',
    name:'hygieneInstructions',
    type:'checkbox'
},{
    title:'15. Do you like your smile?',
    name:'likeSmile',
    type:'checkbox'
}]

const jawProblems = [{
    title:'Clicking',
    name:'jawClicking',
    type:'checkbox'
},
{
    title:'Pain (joint, ear, side of face)',
    name:'jointEarFacePain',
    type:'checkbox'
},
{
    title:'Difficulty in opening or closing mouth',
    name:'difficultyOpenCloseMouth',
    type:'checkbox'
},
{
    title:'Difficulty in chewing',
    name:'difficultyChewing',
    type:'checkbox'
}]

export {prevDentist, dentalHistoryList, jawProblems}