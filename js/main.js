
let honorific = prompt('Please enter an honorific title (e.g. Mister or Colonel).');
let authorName = prompt('What is your full name?');
let adjective1 = prompt('How was the trip?');
let vehicle = prompt('Give a vehicle name');
let vehiclePart = prompt('Provide a vechile part');
let parking = prompt('Provide a location to park vehicle');
let precious = prompt('Give a name for a precious object');
let noiseMaker = prompt('Provide a sound');
let crowdBehavior = prompt('Provide a group activity');
let adjective2 = prompt('Provide an adjective');
let adjective3 = prompt('Provide an adjective');
let color = prompt('Give a color');
let familyMember = prompt('Provide a family relation');
let organ = prompt('Provide an organ');
let bodyPart1 = prompt('Provide a bodypart');
let bodyPart2 = prompt('Provide a bodypart');
let bodyPart3 = prompt('Provide a bodypart');
let thing = prompt('Provide a thing');
let thing2 = prompt('Provide a thing');
let thing3 = prompt('Provide a thing');
let adjective4 = prompt('Provide adjective');
let adjective5 = prompt('Provide adjective');


////////////////////////////////////////////////////////////////////////
// Section Numbers
//
// The poem we are using has section numbers. Let's allow the user to
// generate their own.
//

let userNumber = prompt('Enter your lucky number');

// Use any operator you would like to add, multiply, divide, or otherwise
// change the number that the user submitted.
let number2 = userNumber + 1;
let number3 = userNumber*5;

// DO NOT EDIT BELOW THIS LINE /////////////////////////////////////////
//
// The code below his line handles variable replacement into the HTML file.
// Please do not edit this code unless you are attempting a stretch goal.

let titleText = `O ${honorific}! My ${honorific}! by <small>${authorName}</small>`;
let titleHeading = document.querySelector("#madlib-title");
titleHeading.innerHTML = titleText;

let storyText = `

    ${userNumber}
    O ${honorific}! my ${honorific}! our ${adjective1} trip is done;
    The ${vehicle} has weather'd every rack, the ${precious} we sought is won;
    The ${parking} is near, the ${noiseMaker} I hear, the people all ${crowdBehavior},
    While follow ${bodyPart1} the steady keel, the vessel ${adjective4} and ${adjective5}:
    But O ${organ}! ${organ}! ${organ}!
    O the bleeding drops of ${color},
    Where on the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.

    ${number2}
    O ${honorific}! my ${honorific}! rise up and hear the ${noiseMaker};
    Rise up-for you the ${thing} is flung-for you the bugle trills;
    For you ${thing2} and ribbon'd ${thing3}-for you the shores a-crowding;
    For you they ${crowdBehavior}, the swaying mass, their eager faces turning;
    Here ${honorific}! dear ${familyMember}!
    This ${bodyPart2} beneath your ${bodyPart3};
    It is some dream that on the ${vehiclePart},
    You've fallen ${adjective2} and ${adjective3}.

    ${number3}
    My ${honorific} does not answer, his lips are pale and still;
    My ${familyMember} does not feel my arm, he has no pulse nor will;
    The ${vehicle} is anchor'd safe and sound, its voyage closed and done;
    From fearful trip, the victor ${vehicle}, comes in with ${precious} won;
    Exult, O shores, and ring, O ${noiseMaker}!
    But I, with mournful tread,
    Walk the ${vehiclePart} my ${honorific} lies,
    Fallen ${adjective2} and ${adjective3}.
`;
let storyParagraph = document.querySelector("#madlib-text");
storyParagraph.innerHTML = storyText;