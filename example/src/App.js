import React, { Component } from 'react'
import ScrollTable from 'react-scrollable-table'

export default class App extends Component {
  render () {

    // table header values displayed in here

    const theadData=["Player Number","Player Name","High Score","Venue","Versus","Strike Rate"];

    // table body values displayed in here

    const tbodyData=[
      {"playerNumber":223,"playerName":"T.M.Dilshan","highScore":"100*","venue":"SriLanka","vs":"Australia","sr":400.00},
      {"playerNumber":400,"playerName":"Shane Watson","highScore":200,"venue":"India","vs":"India","sr":300.00},
      {"playerNumber":160,"playerName":"Json Roy","highScore":150,"venue":"MCG","vs":"Australia","sr":120.00},
      {"playerNumber":312,"playerName":"Json Holder","highScore":79,"venue":"Johanusburg","vs":"South Africa","sr":80.50},
      {"playerNumber":100,"playerName":"Rohit Sharma","highScore":260,"venue":"Eden Garden","vs":"SriLanka","sr":400.00},
    ];

    // table header styles in here. so it must be a object

    const theadStyle={backgroundColor:'#F2F5F4',color:'gray',display:'flex',alignItems:'center',fontWeight:'normal',overflow:'hidden',height:'65px'};

    // whole table styles displayed in here. so it must be a object.

    const tableStyle={boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.2), 0 0 15px 0 rgba(0, 0, 0, 0.19)'};

    // table exist in a container.the container styles displayed in here. so it must be a object.

    const containerStyle={width:'90%'}

    return (
      <div>
          <div style={{display:'flex',alignItems:'center',marginTop:'1%',flexDirection:'column'}}>
            <h1>Customizable , scrollable table for react</h1>
            <ScrollTable

              theadData={theadData}
              tbodyData={tbodyData}

              theadStyle={theadStyle}
              tableStyle={tableStyle}
              containerStyle={containerStyle}

            />
            <h3 style={{marginTop:'3%'}}>Documentation</h3>
          </div>
          <div style={{marginLeft:'5%'}}>

            <h4>To install..</h4>
            <span style={{backgroundColor:'lightgray',color:'black',padding:'1%',borderRadius:'20px'}}>npm install --save react-scrollable-table</span>

            <h4 style={{marginTop:'3%'}}>Usage..</h4>
            <div style={{backgroundColor:'lightgray',color:'black',padding:'1%',borderRadius:'20px'}}>
              <p>//es6</p>
              <p>import ScrollableTable from 'react-scrollable-table';</p>
              <p>=====================================================</p>
              <p>There are some properies you can use to customize your table inside the <span style={{fontWeight:'bold'}}>ScrollableTable</span> tag..</p>
              <p>=====================================================</p>
              <li>
                <p>//to insert data to table</p>
                <ul>theadData</ul>
                <ul>tbodyData</ul>
                <p>//to style the table</p>
                <ul>theadStyle</ul>
                <ul>tableStyle</ul>
                <ul>containerStyle</ul>
              </li>
              <p>=====================================================</p>
                <p>1)theadData</p>
                <p>------------------------------</p>
                <p>theadData will represent the table header data set. so you must use a string arry as below for insert data to table header.</p>
                <p>const theadData=["Player Number","Player Name","High Score","Venue","Versus","Strike Rate"];</p>
                &nbsp;

                <p>2)tbodyData</p>
                <p>------------------------------</p>
                <p>tbodyData will represent the table body data set. so you must use an object arry as below for insert data to table body.</p>
                <p>

                  const tbodyData=[
                  &#10100;
                  playerNumber:223,playerName:T.M.Dilshan,highScore:100*,venue:SriLanka,vs:Australia,sr:400.00
                  &#10101;,
                  &#10100;
                  ......
                  &#10101;
                  ];

                </p>
                &nbsp;

              <p>3)theadStyle</p>
              <p>------------------------------</p>
              <p>theadStyle will represent the table header styles. so you must use an object as below for do any style for the table header.</p>
              <p>

                const theadStyle=&#10100;
                backgroundColor:'#F2F5F4',color:'gray',display:'flex',alignItems:'center',fontWeight:'normal',overflow:'hidden',height:'65px'
                &#10101;;

              </p>
              &nbsp;
              <p>4)tableStyle</p>
              <p>------------------------------</p>
              <p>tableStyle will represent the table styles. so you must use an object as below for do any style for the table.</p>
              <p>

                const tableStyle=&#10100;
                boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.2), 0 0 15px 0 rgba(0, 0, 0, 0.19)'
                &#10101;;

              </p>
              &nbsp;
              <p>5)containerStyle</p>
              <p>------------------------------</p>
              <p>containerStyle will represent the container styles.table inserted in container and you can do any change with container as you wish. so you must use an object as below for do any style for the container.</p>
              <p>

                const tableStyle=&#10100;
                width:'90%'
                &#10101;;

              </p>
              &nbsp;
              &nbsp;
              <li>You can apply any css rule inside an object</li>
            </div>

          </div>
      </div>
    )
  }
}
