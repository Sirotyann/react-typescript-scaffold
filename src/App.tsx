import * as React from "react";
import { hot } from 'react-hot-loader/root';
import { TsComponent } from "./components/TsComponent";
import { JsComponent } from "./components/JsComponent";

const App = () => <div>
    <TsComponent name="No one" />
    <JsComponent name="No one" />
</div>;

export default hot(App);