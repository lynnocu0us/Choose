var story;
function getStory(name) {
  return {
    currentScene: "preface1",
    preface1: {
      title: `Hello, ${name}!`,
      story: "You're going to decide how you spend your saturday",
      choices: [
        {
          choice: "Sweet",
          destination: 'preface2'
        },
        {
          choice: `<a class="club" href="CYO.html">Wait I want to change my name!</a>`,
          destination: ''
        },
      ]
    },
    preface2: {
      title: `It could be fantastic or it could be disasterous`,
      story: `This story does contain cartoon violence; You can mix and match your answers.`,
      choices: [
        {
        choice: "...Alright",
        destination: 'preface3'
        },
        {
          choice: "Back",
          destination: 'preface1'
        }
      ]
    },
    preface3: {
      title: "That being said...",
      story: `Are you ready to start?`,
      choices: [
        {
        choice: "Yeah!",
        destination: 'sweet'
        },
        {
        choice: "No I think I'll go play club penguin, the original 2005 release.",
        destination: 'oops'
        },
        {
          choice: "Back",
          destination: 'preface2'
          }
      ]
    },
    oops: {
      title: 'Alright, thats fine.',
      story: `It's your story anyway🥰.`,
      choices:[
        {
         choice: `<a class="club" href="https://newcp.net/en/"><i>Club penguin sounds good rn</i>.</a>`,
         destination: ''
        },
      ]
    },
    sweet: {
      title: 'Good!',
      story: `Let the story begin! I hope you have fun on your day off.<br><br> 
      Suddenly you are transported back to your home, and placed in bed. Tucked in tight, pajamas on and your hair/skin care routine completed for you.<br><br>`,
      choices: [
        {
        choice: `Next`,
        destination: '1'
        },
        {
          choice: `Back`,
          destination: 'preface3'
          },
      ]
    },
    1: {
      title: `It's quiet...`,
      story: `There are no clouds in the sky and the sun is trickling in to your bed room window. you awake stretching before opening your eyes.`,
      choices: [
        {
        choice: "Wait five more minutes",
        destination: '2'
        },
        {
          choice: "I'll get up and start my day",
          destination: '3'
          },
        {
          choice: "Back",
          destination: 'sweet'
        },
      ]
    },

    2: {
      title: `5 more minutes it is`,
      story: `So you sleep for what feels to be another 5 minutes. Do you choose to stay sleep? `,
      choices: [
        {
        choice: "Yeah I need 5 more minutes",
        destination: '2.1'
        },
        {
          choice: "No, I'll get up now its been long enough",
          destination: '3'
          },
        {
          choice: "Back.",
          destination: '1'
          },
      ]
    },
    2.1: {
      title: `Another assumptive 5 minutes went by`,
      story: `Do you wanna get up now?`,
      choices: [
        {
        choice: "Nah, lets sleep another 5 more minutes",
        destination: '2.2'
        },
        {
          choice: "Okay now I know its been too long I should get up",
          destination: '3'
          },
        {
          choice: "Back.",
          destination: '2'
          },
      ]
    },
    2.2: {
      title: `You went back to sleep.`,
      story: `You went back to sleep again. And you kept repeating this well into monday morning. Your coworker called you, your boss called you, your friends called you. No one could reach you from the wonderful deep sleep you were in.<br><br> Some how a doctor got your vitals. You were okay, just sleeping. <br><br>
      There was a news story about you. You broke a world record for longest sleep. Someone broke into your house and wondered what type of bed you owned. <br><br> It was a temperpedic. <br><br> END`,
      choices: [
        {
        choice: `<a class="club" href="index.html"><i>💤Start over...💤</i>.</a>`,
        destination: ''
        },
        {
          choice: "Back.",
          destination: '2'
          },
      ]
    },
    3: {
      title: `You get out of bed and stretch one final time`,
      story: `You feel refreshed and rejuvinated from a good nights sleep and head to the restroom to prepare for your day. After stepping out of the restroom, you feel hungry.
      You look to the kitchen and the counter and notice your keys. You could either go out and buy food or cook yourself a meal. `,
      choices: [
        {
        choice: `Cook a meal`,
        destination: '4'
        },
        {
          choice: `Go out and buy something`,
          destination: '5'
        },
        {
          choice: "Back.",
          destination: '2'
          },
      ]
    },
    4: {
      title: `You decided to cook a meal for yourself.`,
      story: `heading to the fridge to gather your ingredients for the best omlette in the world. You start your favorite stove top eye and begin to make a masterpiece.`,
      choices: [
        {
        choice: `<a class="club" href="index.html"><i>END</i>.</a>`,
        destination: ''
        },
        {
          choice: ``,
          destination: ''
        },
        {
          choice: "",
          destination: ''
          },
      ]
    },
    5: {
      title: `You decide to head out`,
      story: `It's a nice enough day, you figured. Maybe you might even find other things to get into outside. You grab your keys and wallet approaching the front door, curious about what the world has to offer you.`,
      choices: [
        {
        choice: `<a class="club" href="index.html"><i>END</i>.</a>`,
        destination: ''
        },
        {
          choice: ``,
          destination: ''
        },
        {
          choice: "",
          destination: ''
          },
      ]
    },
    0: {
      title: ``,
      story: ``,
      choices: [
        {
        choice: ``,
        destination: ''
        },
        {
          choice: ``,
          destination: ''
        },
        {
          choice: "",
          destination: ''
          },
      ]
    },
    0: {
      title: ``,
      story: ``,
      choices: [
        {
        choice: ``,
        destination: ''
        },
        {
          choice: ``,
          destination: ''
        },
        {
          choice: "",
          destination: ''
          },
      ]
    },
    0: {
      title: ``,
      story: ``,
      choices: [
        {
        choice: ``,
        destination: ''
        },
        {
          choice: ``,
          destination: ''
        },
        {
          choice: "",
          destination: ''
          },
      ]
    },
    0: {
      title: ``,
      story: ``,
      choices: [
        {
        choice: ``,
        destination: ''
        },
        {
          choice: ``,
          destination: ''
        },
        {
          choice: "",
          destination: ''
          },
      ]
    },
    0: {
      title: ``,
      story: ``,
      choices: [
        {
        choice: ``,
        destination: ''
        },
        {
          choice: ``,
          destination: ''
        },
        {
          choice: "",
          destination: ''
          },
      ]
    },
    0: {
      title: ``,
      story: ``,
      choices: [
        {
        choice: ``,
        destination: ''
        },
        {
          choice: ``,
          destination: ''
        },
        {
          choice: "",
          destination: ''
          },
      ]
    },
    0: {
      title: ``,
      story: ``,
      choices: [
        {
        choice: ``,
        destination: ''
        },
        {
          choice: ``,
          destination: ''
        },
        {
          choice: "",
          destination: ''
          },
      ]
    },
    0: {
      title: ``,
      story: ``,
      choices: [
        {
        choice: ``,
        destination: ''
        },
        {
          choice: ``,
          destination: ''
        },
        {
          choice: "",
          destination: ''
          },
      ]
    },
    0: {
      title: ``,
      story: ``,
      choices: [
        {
        choice: ``,
        destination: ''
        },
        {
          choice: ``,
          destination: ''
        },
        {
          choice: "",
          destination: ''
          },
      ]
    },
    0: {
      title: ``,
      story: ``,
      choices: [
        {
        choice: ``,
        destination: ''
        },
        {
          choice: ``,
          destination: ''
        },
        {
          choice: "",
          destination: ''
          },
      ]
    },
    0: {
      title: ``,
      story: ``,
      choices: [
        {
        choice: ``,
        destination: ''
        },
        {
          choice: ``,
          destination: ''
        },
        {
          choice: "",
          destination: ''
          },
      ]
    },
    0: {
      title: ``,
      story: ``,
      choices: [
        {
        choice: ``,
        destination: ''
        },
        {
          choice: ``,
          destination: ''
        },
        {
          choice: "",
          destination: ''
          },
      ]
    },




    
  }
}


document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('#start-button')
  var content = document.querySelector('#content')
  button.addEventListener('click', function() {
    var name = document.querySelector('#name-input')
    story = getStory(name.value)
    renderScene()
  })
})


function renderScene() {
  var text = ""
  var image = "";
  if (story[story.currentScene].image) {
    image = "<img></img>"
  }
  if (story[story.currentScene].buttonText) {
    text = story[story.currentScene].buttonText
  }
  content.innerHTML = `
  <h1>${story[story.currentScene].title}</h1>
  <p>${story[story.currentScene].story}</p>
  ${image}
  <div><button id = "submit-button">${getInputs()}</button></div>
  `
  if (story[story.currentScene].image) {
    document.querySelector("img").src = `./img/${story[story.currentScene].image}`
  }
  var button = document.querySelector("#submit-button");
  button.addEventListener('click', function() {
    getInputValue()
  })
}

function getInputValue() {
  var inputs = document.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      story.currentScene = inputs[i].getAttribute('data-destination')
      renderScene();
      return;
    }
  }
  story.currentScene = story[story.currentScene].defaultDestination
  renderScene()
}

function getInputs() {
  var input = ""
  if (!story[story.currentScene].choices) {
    return ""
  }
  for(var i = 0; i < story[story.currentScene].choices.length; i++) {
    input += `
    <label class= "input">
<input data-destination = ${story[story.currentScene].choices[i].destination} id = "radio${i}" type = "radio" name = "choices"/>${story[story.currentScene].choices[i].choice}</label>`
  }
  return input;
}