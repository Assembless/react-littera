import React from "react";
import Undraw from "react-undraw";
import FlexWrapper from "./FlexWrapper";

const UnderCunstruction = () => {
    return (
        <div style={{ padding: "5% 0" }}>
            <FlexWrapper justifyContent="space-evenly" alignItems="center" flexDirection="column">
                <Undraw name="under-construction" color="#5F4494" />
                <div style={{ padding: "1% 23%", color: "#fff" }}>
                    <h1>More coming soon!</h1>
                </div>
            </FlexWrapper>
        </div>
    );
};

export default UnderCunstruction;
