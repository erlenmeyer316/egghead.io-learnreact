/*Libraries*/
import React from 'react';
import ReactDOM from 'react-dom';
/*Components*/
import StatelessFunctionComponent from './StatelessFunctionComponent';
import ClassBasedComponentJSX from './ClassBasedComponent-JSX';
import ComponentMultiNode from './Component-MultiNode';
import ComponentWithLooseProps from './ComponentWithLooseProps';
import ComponentWithTypedProps from './ComponentWithTypedProps';
import ComponentWithState from './ComponentWithState';
import ChildComponents from './ChildComponents';
import ComponentWithNestedData from './ComponentWithNestedData';
import CustomPropValidation from './CustomPropValidation';
import SyntheticEvents from './SyntheticEvents';
import ComponentReferences from './ComponentReferences';
import ComponentLifecycleMethods from './ComponentLifecycleMethods';
import ComponentUpdates from './ComponentUpdates';
import MapComponentsFromArrays from './MapComponentsFromArrays';
import HigherOrderComponent from './HigherOrderComponent';
import JsxCompiler from './JsxCompiler';
import ReactChildrenUtils from './ReactChildrenUtils';
import ExtendChildComponents from './ExtendChildComponents';
import ComposableAPI from './ComposableAPI';
/*ServiceWorker*/
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    < ComposableAPI /> ,
    document.getElementById('root')
);
registerServiceWorker();
