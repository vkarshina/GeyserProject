// Making text appear an disappear when marker of geyser is clicked//

document.addEventListener('click', function(event) {
  
  // Check if the clicked element has the class 'circle'
  if (event.target.classList.contains('Marker')) {
    // Get the ID of the clicked circle
    var circleId = event.target.id;
    
    // Construct the ID of the corresponding text element
    var textId = circleId + 'Text';

    // Toggle the visibility of the text element
    var textElement = document.getElementById(textId);
    textElement.style.display = (textElement.style.display === 'none' || textElement.style.display === '') ? 'block' : 'none';
  }

  else if (event.target.classList.contains('Label')) {
    console.log('Click', event.target.id);
    // Get the ID of the clicked circle
    var circleId = event.target.id;
    
    // Construct the ID of the corresponding text element
    var textId = circleId + 'Text';

    // Toggle the visibility of the text element
    var textElement = document.getElementById(textId);
    textElement.style.display = (textElement.style.display === 'none' || textElement.style.display === '') ? 'block' : 'none';
  }
});

//Fetching predictable geyser data
fetch('https://www.geysertimes.org/api/v5/entries_latest/2')
  .then(res => res.json())
  .then(data => {
    if (data && data.entries && data.entries.length > 0) {
      data.entries.forEach(entry => {
        const eruption = data.entries.map(entry => `${entry.time}`).join('');

        const date = new Date(eruption * 1000);
        const timeFormatting = {
          year: '2-digit',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZone: 'America/Denver', // Mountain Time Zone
          hour12: true, // Use 12-hour format
        };
      
        // Convert the date to a string in the specified time zone
        const formattedDate = date.toLocaleString('en-US', timeFormatting);
      
      
      const targetDiv = document.getElementById('OldFaithfulText');
      const targetParagraph = targetDiv.querySelector('p');

      targetParagraph.innerHTML = `Last eruption: ${formattedDate}`;
      });
    } else {
      console.error('Invalid or empty API response:', data);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });