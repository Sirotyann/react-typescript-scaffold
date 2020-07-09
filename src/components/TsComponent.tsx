import * as React from "react";

export interface TsComponentProps { name:string }

export const TsComponent = (props: TsComponentProps) => <h1>
    Hi, {props.name}! 'm a Typescript react component!
</h1>;
