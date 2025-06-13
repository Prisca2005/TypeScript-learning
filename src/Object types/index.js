// Object Types
// In this scrim, based on what we just learnt, can you change userName to firstName, then
// add an age and lastName to the 'you' Object, making sure to account for it in the Specialised
// Object for defining its structure.

const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews')
//let isOpen: boolean

const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

//function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

// ts code for object

// const you: {
//     firstName : string;
//     lastName : string;
//     age: number;
//     isReturning: boolean ;
// }
const you = {
   firstName: 'Prisca',
   lastName: 'Masereli',
   age: 20,
   isReturning: true,
}

console.log(you.userName)
//function populateUser(isReturning : boolean, userName: string ) {  for ts
function populateUser(isReturning , userName ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

populateUser(you.isReturning, you.userName)