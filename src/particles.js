import React, {Component} from 'react';
import Particles from 'react-particles-js';


class ParticlesContainer extends Component {
render() {
    return ( 
        <Particles 
            params={{
                "particles":{
                  "number":{
                    "value":150
                  },
                  "color":{
                    "value":"#fff"
                  },
                  "shape":{
                    "type":"circle",
                    "stroke":{
                      "width":1,
                      "color":"#ccc"
                    },
                    "image":{
                      "src":"http://www.iconsdb.com/icons/preview/white/contacts-xxl.png"
                    }
                  },
                  "opacity":{
                    "value":0.5,
                    "random":true,
                    "anim":{
                      "enable":true,
                      "speed":1
                    }
                  },
                  "size":{
                    "value": 3,
                    "random":true,
                    "anim":{
                      "enable": true,
                      "speed":30
                    }
                  },
                  "line_linked":{
                    "enable": true,
                    "distance": 120,
                    "color":"#fff",
                    "width":1
                  },
                  "move":{
                    "enable":true,
                    "speed":3,
                    "direction":"none",
                    "straight":false
                  }
                },
                "interactivity":{
                  "events":{
                    "onhover":{
                      "enable":true,
                      "mode":"repulse"
                    },
                    "onclick":{
                      "enable": true,
                      "mode":"push"
                    }
                  },
                  "modes":{
                    "repulse":{
                      "distance":50,
                      "duration":0.4
                    },
                    "bubble":{
                      "distance":100,
                      "size":10
                    }
                  }
                }
              }
              } />
    )
}
}

export default ParticlesContainer;