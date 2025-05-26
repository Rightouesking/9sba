stopped the form from submitting and refreshing the page, giving us a chance to validate the fields using JavaScript and only allow the form to proceed if all inputs were valid.
JavaScript-based validation gives more control: custom messages, real-time feedback, and additional logic like comparing passwords.
Using both provides a better user experience and fallback safety.
it's accessible to any JavaScript running on the same page. It's not suitable for storing sensitive or private information like passwords or personal data.

 I added a custom event listener to compare its value to the password field and showed a manual error if they didn’t match.
  input event to validate fields as users typed, which avoids surprises on submit. I kept error messages short and specific to help users correct inputs quickly. Error spams were placed right below the relevant input.