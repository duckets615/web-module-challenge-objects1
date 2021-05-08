const reviews = [
    {name: "Daniela", rating: 5, feedback:"Beautiful atmosphere and wonderful vegan options!"},
    {name: "Jack", rating: 3, feedback:"A little too hipster for my taste, but the burger was decent, if overpriced"},
    {name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." },
    {name: "Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."},
    {name: "Reyna", rating: 3.5, feedback: ""},
]

function editFeedback(array, name, str) {
    let length = array.length; // get static value for efficient for loop;
    for (let i = 0; i < length; i++) {
      if (array[i].name === name) { // check of object name matches provided name argument
        array[i].feedback = str; // if match, change feedback value to provided feedback argument;
        return console.log('Entry Updated'); // console log success message
      }
    }
    return 'Error, entry not updated'; // if no match found or update failed, return failure message;
  }
  console.log(reviews);
  editFeedback(reviews, 'Reyna', 'this place is chill with really cool people, great for getting work done on weekdays')
  console.log(reviews);