

// Get the GitHub username input form
const gitHubForm = document.getElementById('gitHubForm');

// listen to submit
gitHubForm.addEventListener('submit' , (e) => {
    //prevent default form submit action
    e.preventDefault();
    //get the username input field 
    let userInput = document.getElementById('usernameInput').value ;
    getUserLocation(userInput);
    //requestGitHubRepoData(userInput);

})

function getUserLocation(userName){
    const xhr = new XMLHttpRequest();
    const url = `https://api.github.com/users/${userName}`;
    console.log('calling git data from: ',url);
   
    //open a new conn with async true
    xhr.open('GET', url, true);

    // after respnse received process it
    xhr.onload = function(){
        const info = JSON.stringify(this.response);
        console.log(info.location);
        console.log(info.hireable);
    }
    }
    xhr.send();        

function requestGitHubRepoData(userName){
    const xhr = new XMLHttpRequest();
    const url = `https://api.github.com/users/${userName}/repos`;
    console.log('calling git data from: ',url);
   
    //open a new conn with async true
    xhr.open('GET', url, true);

    // after respnse received process it
    xhr.onload = function(){
         // Parse API data into JSON

        const data = JSON.parse(this.response);
        // Loop over each object in data array
        for (let i in data) {

            // Get the ul with id of userRepos
            let ul = document.getElementById('userRepos');
    
            // Create variable that will create li's to be added to ul
            let li = document.createElement('li');
            
            // Add Bootstrap list item class to each li
            li.classList.add('list-group-item')
        
            // Create the html markup for each li
            li.innerHTML = (`
                <p><strong>Repo:</strong> ${data[i].name}</p>
                <p><strong>Description:</strong> ${data[i].description}</p>
                <p><strong>URL:</strong> <a href="${data[i].html_url}">${data[i].html_url}</a></p>
            `);
            
            // Append each li to the ul
            ul.appendChild(li);
    }

}
// Send the request to the server
xhr.send();
}
