/* eslint-env browser */

// Preloader
let preload_time = 3000; // How long preload is shown
let preload_fade_speed = 400; // Preload fadeout speed

setTimeout(function(){
  document.querySelector('.loader').style.transition = `opacity ${preload_fade_speed}ms`;
  document.querySelector('.loader').style.opacity = 0;
  setTimeout(() => {
    document.querySelector('.loader').style.display = 'none';
  }, preload_fade_speed);
  open_modal(); // Open tutorial
}, preload_time);

// End preloader

// Tutorial modal

function open_modal() {
  document.querySelector('.tut').classList.add('poptut'); // Remove
  document.querySelector('.question').style.transition = `opacity 400ms`;
  document.querySelector('.question').style.opacity = 0; // Fadeout
}

function close_modal() {
  document.querySelector('.question').style.transition = `opacity 400ms`;
  document.querySelector('.question').style.opacity = 1; // Fade in
  document.querySelector('.tut').classList.remove('poptut'); // Remove
  document.querySelectorAll('h1, h2').forEach(el => el.classList.add('popone')); // Intro
  document.querySelector('.character').classList.add('poptwo'); // Intro
  document.querySelector('.rating').classList.add('popthree'); // Intro
  document.querySelectorAll('.next, .prev').forEach(el => el.classList.add('popfour')); // Intro
}

document.querySelector('.tut p').addEventListener('click', function() {
  close_modal(); // Close modal
});

document.querySelector('.question p').addEventListener('click', function() {
  open_modal(); // Open modal
});

// End tutorial modal

// Page slider

let slide_amount = document.querySelectorAll('.feedbackform_slide').length; // Slide count
let window_width = window.innerWidth; // Init window width
let current_x = 0; // Current x value of slides
let current_position = 0; // Current position

document.querySelector('.feedbackform').style.width = window_width * slide_amount + 'px'; // Set up the slides
document.querySelectorAll('.feedbackform_slide').forEach(el => el.style.width = window_width + 'px'); // Set up the slides

document.querySelector('.next').addEventListener('click', function() {
  update_answers();
  window_width = window.innerWidth; // Reassess window width
  if (current_position < slide_amount - 1) {
    current_position++;
    current_x = current_position * window_width;
    document.querySelector('.feedbackform_slide').style.right = current_x + 'px';
    document.querySelector('.active_slide').classList.remove('active_slide');
    document.querySelector('.feedbackform_slide').nextElementSibling.classList.add('active_slide');
    setTimeout(function() {
      document.querySelector('.active_slide .popone').classList.remove('popone'); // Reset animations
      document.querySelector('.active_slide .poptwo').classList.remove('poptwo'); // Reset animations
      document.querySelector('.active_slide .popthree').classList.remove('popthree'); // Reset animations
      document.querySelector('.active_slide .popfour').classList.remove('popfour'); // Reset animations
    }, 10)
    setTimeout(function() {
      document.querySelectorAll('h1, h2').forEach(el => el.classList.add('popone')); // Reset animations
      document.querySelectorAll('.character, a.follow, a.download').forEach(el => el.classList.add('poptwo')); // Reset animations
      document.querySelector('.rating').classList.add('popthree'); // Reset animations
      document.querySelectorAll('.next, .prev').forEach(el => el.classList.add('popfour')); // Reset animations
    }, 410)
  }
});

document.querySelector('.prev').addEventListener('click', function() {
  update_answers();
  window_width = window.innerWidth;
  if (current_position > 0) {
    current_position--;
    current_x = current_position * window_width;
    document.querySelector('.feedbackform_slide').style.right = current_x + 'px';
    document.querySelector('.active_slide').classList.remove('active_slide');
    document.querySelector('.feedbackform_slide').previousElementSibling.classList.add('active_slide');
    setTimeout(function() {
      document.querySelector('.active_slide .popone').classList.remove('popone'); // Reset animations
      document.querySelector('.active_slide .poptwo').classList.remove('poptwo'); // Reset animations
      document.querySelector('.active_slide .popthree').classList.remove('popthree'); // Reset animations
      document.querySelector('.active_slide .popfour').classList.remove('popfour'); // Reset animations
    }, 10)
    setTimeout(function() {
      document.querySelectorAll('h1, h2').forEach(el => el.classList.add('popone')); // Reset animations
      document.querySelectorAll('.character, a.follow, a.download').forEach(el => el.classList.add('poptwo')); // Reset animations
      document.querySelector('.rating').classList.add('popthree'); // Reset animations
      document.querySelectorAll('.next, .prev').forEach(el => el.classList.add('popfour')); // Reset animations
    }, 410)
  }
});

window.addEventListener('resize', function() { // Responsivity
  window_width = window.innerWidth; // Window width
  document.querySelector('.feedbackform').style.width = window_width * slide_amount + 'px'; // Re jig slide sizes
  document.querySelectorAll('.feedbackform_slide').forEach(el => el.style.width = window_width + 'px'); // Re jig slide sizes
  current_position = 0; // Reset
  current_x = current_position * window_width; // Reset
  document.querySelector('.feedbackform_slide').style.right = current_x + 'px'; // Reset
  document.querySelector('.active_slide').classList.remove('active_slide');
  document.querySelector('.first').classList.add('active_slide');
});

// End page slider

// Questions

let questions = ['How satisfied are you with our services?', 'How satisfied are you with your pet?', 'How were our staff?', 'How was the cleanliness of our store?']
let q = 0;

document.querySelectorAll('.question_s').forEach(el => {
  el.innerHTML = questions[q];
  q++;
});

// Summary
let answers = []

let animals = ['monkey', 'rabbit', 'panda', 'lion']
for (let i = 0; i < animals.length; i++) {
  answers[animals[i]] = ['Average']
}

function update_answers() {
  document.querySelector('.summary').innerHTML = '';
  for (let i = 0; i < questions.length; i++) {
    document.querySelector('.summary').innerHTML += '<p>' + questions[i] + '</p><p class="answer_p">' + answers[animals[i]][0] + '</p>'
  }
}

// Messages

let monkey_messages = ['terrible', 'bad', 'not great', 'average', 'good', 'excellent', 'amazing']; // Monkey array
let rabbit_messages = ['disappointed', 'unhappy', 'not great', 'average', 'pleased', 'happy', 'super happy']; // Rabbit array
let panda_messages = ['terrible', 'bad', 'not great', 'average', 'good', 'excellent', 'amazing']; // Panda array
let lion_messages = ['very dirty', 'dirty', 'needs work', 'average', 'clean', 'very clean', 'Superb']; // Lion array

// The smile

document.querySelectorAll('input').forEach(input => {
  input.addEventListener('mousedown', function() {
    input.style.cursor = '-webkit-grabbing';
    input.style.cursor = '-moz-grabbing';
  });

  input.addEventListener('mouseup', function() {
    input.style.cursor = '-webkit-grab';
    input.style.cursor = '-moz-grab';
  });

  input.addEventListener('mousedown', function() {
    let active_smile = input.classList[input.classList.length - 1]; // Get active smile
    let s = setInterval(function() {
      // Change smile svg coords
      let smile_value = document.querySelector('input.' + active_smile).value; // Get the value
      document.querySelector('.smile.' + active_smile + ' path').setAttribute('d', 'M10 10 C 20 ' + smile_value + ', 40 ' + smile_value + ', 50 10');
      // Select relevant array
      let active_array;
      if (active_smile == 'monkey') {
        active_array = monkey_messages; // Monkey array
      } else if (active_smile == 'rabbit') {
        active_array = rabbit_messages; // Rabbit array
      } else if (active_smile == 'panda') {
        active_array = panda_messages; // Panda array
      } else if (active_smile == 'lion') {
        active_array = lion_messages; // Lion array
      }
      answers[active_smile] = [document.querySelector('.rating.' + active_smile + ' span').innerHTML]; // Push to answers
      document.querySelector('.sb.' + active_smile).style.opacity = (smile_value / 60); // Pattern opacity
      document.querySelector('.grad.' + active_smile).style.opacity = (smile_value / 40); // Gradient opacity
      if (smile_value == 0) {
        // Worst
        document.querySelector('.rating.' + active_smile + ' span').innerHTML = active_array[0]; // Set message
      } else if (smile_value < 10 && smile_value > 5) {
        // Bad
        document.querySelector('.rating.' + active_smile + ' span').innerHTML = active_array[1]; // Set message
      } else if (smile_value < 5 && smile_value > 0) {
        // Not good
        document.querySelector('.rating.' + active_smile + ' span').innerHTML = active_array[2]; // Set message
      } else if (smile_value == 10) {
        // Average
        document.querySelector('.rating.' + active_smile + ' span').innerHTML = active_array[3]; // Set message
      } else if (smile_value > 10 && smile_value < 15) {
        // Good
        document.querySelector('.rating.' + active_smile + ' span').innerHTML = active_array[4]; // Set message
      } else if (smile_value > 15 && smile_value < 20) {
        // Very good
        document.querySelector('.rating.' + active_smile + ' span').innerHTML = active_array[5]; // Set message
      } else if (smile_value == 20) {
        // Amazing
        document.querySelector('.rating.' + active_smile + ' span').innerHTML = active_array[6]; // Set message
      }
    }, 10);

    input.addEventListener('mouseup', function() {
      clearInterval(s); // Clear intervals
    });
  });
});
