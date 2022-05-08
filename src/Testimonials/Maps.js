import React from 'react';


function MapSection() {
  return (
    <div style={{height: "550px"}}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.3000400108326!2d80.17114701464784!3d13.206469790702101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527d8a247cdd1b%3A0x216d233c53292d79!2sSree%20Gurudatta%20Roadlines!5e0!3m2!1sen!2sin!4v1645859050248!5m2!1sen!2sin"  
      height="450" 
      title='location' 
      style={{ border: "0", width: "100%", display: "flex", justifyContent: "center" }} 
      allowfullscreen="true" 
      loading="lazy"></iframe>
    </div>
  )
}

export default MapSection



// import { Map, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//     width: '100%',
//     height: '100%'
// };

// export class MapSection extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={
//           {
//             lat: 13.206229740678125,
//             lng: 80.17349809566782
//           }
//         }
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({apiKey: "AIzaSyDn9_IskinfRxVCLBqFeR4UZzfxrvSNoAI"})(MapSection);

//AIzaSyDn9_IskinfRxVCLBqFeR4UZzfxrvSNoAI