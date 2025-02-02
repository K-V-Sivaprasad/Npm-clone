function alt(){
    alert("WELCOME TO NPM WEBSITE")
};
setTimeout(alt,2000);
setTimeout(() => {
    const userResponse = confirm('Would you like to allow notifications?');
    if (userResponse) {
      const email = prompt("Enter your email:");
      if (email) {
        alert(`Thank you! You entered: ${email}`);
      } else {
        alert("You didn't provide an email.");
      }
    } else {
      alert("NOT A PROBLEM");
    }
  }, 5000);

  
