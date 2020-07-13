import * as React from "react";
import { hot } from 'react-hot-loader/root';
import { TsComponent } from "./components/TsComponent";
import { JsComponent, JsClassComponent } from "./components/JsComponent";

const App = () => <div>
    <TsComponent name="No one" />
    <JsComponent name="No one" />
    <JsClassComponent />
</div>;

export default hot(App);