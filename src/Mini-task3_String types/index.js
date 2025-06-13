// String Types mini-challenge
// Write a function that will display the most recent reviewers name next to the review total,
// making sure to assign a type to the parameter, to prevent unwanted behaviour.


const reviewTotalDisplay = document.querySelector('#reviews')

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

// Solution 

//function showReviewTotal (value: number, reviewer: string) { for typescript
function showReviewTotal (value, reviewer) {
    reviewTotalDisplay.innerHTML = 'Review total :' + value.toString() + '| Last reviewed by ' + reviewer
}

showReviewTotal(reviews.length, reviews[0].name)
 