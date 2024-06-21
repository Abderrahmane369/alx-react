import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
    it("renders without crashing", () => {
        shallow(<App />);
    });

    it("renders the header", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find("div.App-header")).toHaveLength(1);
    });
    it("renders the body", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find("div.App-body")).toHaveLength(1);
    });
    it("renders the footer", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find("div.App-footer")).toHaveLength(1);
    });
});
