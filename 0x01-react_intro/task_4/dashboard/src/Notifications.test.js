import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications", () => {
    it("renders without crashing", () => {
        shallow(<Notifications />);
    });

    it("renders 3 list items", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find("ul").find("li")).toHaveLength(3);
    });

    it("renders 'Here is the list of notifications'", () => {
        const wrapper = shallow(<Notifications/>);
        expect(wrapper.find('p').text()).toEqual("Here is the list of notifications")
    })
});
