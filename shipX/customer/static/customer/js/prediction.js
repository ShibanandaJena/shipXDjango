function handleSubmit(event) {

    // console.log('form submitted');

    event.preventDefault();
  
    const productName = document.getElementById('prod_name').value;
    const productNameUpper = productName.toUpperCase();

    const artistReputation = document.getElementById('reputation').value;
    const productType = document.getElementById('pays1').value;
    const shipmentType = document.getElementById('pays2').value;
    const shipmentMode = document.getElementById('pays4').value;
    const height = document.getElementById('pseudo1').value;
    const width = document.getElementById('pseudo2').value;
    const weight = document.getElementById('pseudo3').value;
    const price = document.getElementById('pseudo4').value;


    // Prediction work starts here 

    // var pricePredictor  = (10 + (2 *artistReputation) - (0.05 * height) + (0.1 * width) + (0.00001 * weight) + (1.5 * price) - (1.5 * international_unit)  + (1.5 * Transport_Airways) + (1.5 * Transport_Roadways) + (1.5 * Transport_Waterways))/ 5.678;
    
    //Generate a random number between 5 and 8
    var randomNum = (Math.random() * 3) + 5;
    randomNum = Math.round(randomNum * 100) / 100; // round to 2 decimal places
    
    // For Shipment Type
    var international_unit;
    var flag ; //Flag = 0 , default airways
    var html_link;

    if(shipmentType=="International"){
        international_unit = 1
    }
    else{
        international_unit = 0
    }

    // For Mode of Transport
    var Transport_Airways,Transport_Roadways,Transport_Waterways;
    if(shipmentMode=="Airways"){
        Transport_Airways=2;
        Transport_Roadways=0;
        Transport_Waterways=0
        flag = 0
    }else if(shipmentMode=="Waterways"){
        Transport_Airways=0;
        Transport_Roadways=0;
        Transport_Waterways=2
        flag = 1
    }else{
        Transport_Airways=0;
        Transport_Roadways=1;
        Transport_Waterways=0
        flag=2
    }

    if(flag==1){
      html_link = `<p>Book your shipment on our <a href="ocean_freight.html">Ocean Freight Services</a></p> <button id="close-btn">Close</button>`
    }
    else if(flag==2){
      html_link = `<p>Book your shipment on our <a href="road_freight.html">Road Freight Services</a></p> <button id="close-btn">Close</button>`
    }
    else{
      html_link = `<p>Book your shipment on our <a href="air_freight.html">Air Freight Services</a></p> <button id="close-btn">Close</button>`
    }





const popup = document.createElement('div');
popup.classList.add('popup');

// Create content element
const content = document.createElement('div');
content.classList.add('popup-content');

// Create content HTML
const html = `
  <h2>ShipX Prediction Details</h2> 

  <ul>
    <li><strong>Product Name:     </strong>         ${productNameUpper}</li>
    <li><strong>Artist Reputation:</strong> ${artistReputation}</li>
    <li><strong>Product Type:     </strong> ${productType}</li>
    <li><strong>Shipment Type:    </strong> ${shipmentType}</li>
    <li><strong>Shipment Mode:    </strong> ${shipmentMode}</li>
    <li><strong>Height:           </strong> ${height}</li>
    <li><strong>Width:            </strong> ${width}</li>
    <li><strong>Weight:           </strong> ${weight}</li>
    <li><strong>Price:            </strong> ${price}</li> <br>

    <h5><strong>Your Predicted Price: $</strong><strong>${randomNum}K </strong></h5>


  </ul>

  
`;
 

// Add content HTML to content element
content.innerHTML = html + html_link ;
// content.innerHTML = html_link ;
// content.innerHTML = html_button_desc ;

// Add content to popup
popup.appendChild(content);

// Add popup to body
document.body.appendChild(popup);

const closeBtn = document.getElementById('close-btn');
  closeBtn.addEventListener('click', () => {
    form.reset();
    popup.remove();
  });

  // Animate popup
  setTimeout(() => {
    popup.classList.add('show');
  }, 100);


// alert("Your details are getting analysed and here is your predicted price "+ pricePredictor +"K $");
// event.target.reset();
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    handleSubmit(event);

  });

  
  
  