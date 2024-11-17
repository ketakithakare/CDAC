function fetchData(url, callback) {
    console.log(`Fetching data from ${url}...`);
  
   
    setTimeout(() => {
      const errorOccurred = Math.random() < 0.3; 
  
      if (errorOccurred) {
        const errorMessage = `Error fetching data from ${url}`;
        
        
        callback(errorMessage, null);
      } else {
        const response = `Response from ${url}`;
        
       
        callback(null, response);
      }
    }, 2000); 
  }
  

  fetchData("www.google.com", (error, response) => {
    if (error) {
      console.error("An error occurred:", error);
    } else {
      console.log(response);
    }
  });
  