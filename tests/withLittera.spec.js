import React from "react";
import { mount } from "enzyme";
import withLittera from "../src/withLittera";

describe("withLittera", () => {
    it("should be a function", () => {
        expect(typeof withLittera).toBe("function");
    });
});
