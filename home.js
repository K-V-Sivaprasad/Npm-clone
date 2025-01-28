function alt(){
    alert("WELCOME TO NPM WEBSITE")
};
setTimeout(alt,2000);
setTimeout(() => {
    // Display a confirmation dialog after 5 seconds
    const userResponse = confirm('Would you like to allow notifications?');
    
    if (userResponse) {
      // If user clicks "OK"
      const email = prompt("Enter your email:");
      if (email) {
        alert(`Thank you! You entered: ${email}`);
      } else {
        alert("You didn't provide an email.");
      }
    } else {
      // If user clicks "Cancel"
      alert("NOT A PROBLEM");
    }
  }, 5000);

  
