import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import {CopyToClipboard} from 'react-copy-to-clipboard';
//Prism
// eslint-disable-next-line
import Prism from "prismjs"; //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

import CustomTabs from "../../../components/tabs/customTabs";
import ContentHeader from "../../../components/contentHead/contentHeader";
import ContentSubHeader from "../../../components/contentHead/contentSubHeader";

// Import examples
import { SingleSelect } from 'react-sonata-components-library';
import { MultiSelect } from 'react-sonata-components-library';
import SelectGrouped from "./examples/selectGrouped";
import SelectAnimated from "./examples/selectAnimated";

// Import Example Source Code
import SelectSingleSource from "./exampleSource/selectSingle";
import SelectMultiSource from "./exampleSource/selectMulti";
import SelectGroupedSource from "./exampleSource/selectGrouped";
import SelectAnimatedSource from "./exampleSource/selectAnimated";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import Select from "react-select";


class Selects extends Component {
   render() {
      return (
         <Fragment>
            <Row>
               <Col md="12" lg="12">
                  <Card>
                  <CardBody>
                        <CardTitle>Select Single</CardTitle>
						<LiveProvider 
						  code={SelectSingleSource}
					      scope={{SingleSelect,Select}}
                        >
                        <Col md="12" lg="6" className="leftDiv">
                          <LivePreview />
							  <LiveError />
                           <div className="">
                              <div className="installation">Installation</div>                     
                              <Col md="12" className="leftDiv">
                                 <div className="installation-steps">
                                    <div className="installation-text">Download and install the package. Use Node.js v8.0.0 or later.</div>
                                    <div className="installation-box">npm i react-sonata-components-library
                                    <br/>
                                     import { SingleSelect } from 'react-sonata-components-library'
                                    </div>
                                 </div>
                              </Col>
                           </div>
                        </Col>
                        <Col md="12" lg="6" className="rightDiv">
                           <CopyToClipboard text={SelectSingleSource}
                              onCopy={() => this.setState({copied: true})}>
                              <span className="copy-code">Copy Code</span>
                           </CopyToClipboard>
                          <div style={{backgroundColor : '#000000'}}>
                                 <LiveEditor />
                            </div>  
                           
                        </Col>
                        </LiveProvider>
                     </CardBody>
                  </Card>
               </Col>               
            </Row>
            <Row>
               <Col md="12" lg="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Multi Select</CardTitle>
                        <LiveProvider 
						  code={SelectMultiSource}
					      scope={{MultiSelect,Select}}
                        >
                        <Col md="12" lg="6" className="leftDiv">
                        <LivePreview />
							  <LiveError />
                           <div className="">
                              <div className="installation">Installation</div>                     
                              <Col md="12" className="leftDiv">
                                 <div className="installation-steps">
                                    <div className="installation-text">Download and install the package. Use Node.js v8.0.0 or later.</div>
                                    <div className="installation-box">npm i react-sonata-components-library
                                       <br/>
                                       import { MultiSelect } from 'react-sonata-components-library'
                                    </div>
                                 </div>
                              </Col>
                           </div>
                        </Col>
                        <Col md="12" lg="6" className="rightDiv">
                           <CopyToClipboard text={SelectMultiSource}
                              onCopy={() => this.setState({copied: true})}>
                              <span className="copy-code">Copy Code</span>
                           </CopyToClipboard>
                           <div style={{backgroundColor : '#000000'}}>
                                 <LiveEditor />
                            </div>
                           
                        </Col>
                        </LiveProvider>
                     </CardBody>
                  </Card>
               </Col>               
            </Row>
            {/* <Row>
               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Select Single</CardTitle>
                        <CustomTabs
                           TabContent1={<SelectSingle />}
                           TabContent2={
                              <PrismCode component="pre" className="language-javascript">
                                 {SelectSingleSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Select Multiple</CardTitle>
                        <CustomTabs
                           TabContent1={<SelectMulti />}
                           TabContent2={
                              <PrismCode component="pre" className="language-javascript">
                                 {SelectMultiSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Grouped</CardTitle>
                        <CustomTabs
                           TabContent1={<SelectGrouped />}
                           TabContent2={
                              <PrismCode component="pre" className="language-javascript">
                                 {SelectGroupedSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Animated</CardTitle>
                        <p>Remove the values below to see them in action.</p>
                        <CustomTabs
                           TabContent1={<SelectAnimated />}
                           TabContent2={
                              <PrismCode component="pre" className="language-javascript">
                                 {SelectAnimatedSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
            </Row> */}
         </Fragment>
      );
   }
}

export default Selects;