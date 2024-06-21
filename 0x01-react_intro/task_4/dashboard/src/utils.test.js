import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

describe("getFullYear", () => {
    it("returns the current year", () => {
        expect(getFullYear()).toEqual(new Date().getFullYear());
    });
});

describe("getFooterCopy", () => {
    it("returns Holberton School when its true", () => {
        expect(getFooterCopy(true)).toEqual("Holberton School");
    });

    it("returns Holberton School main dashboard otherwise", () => {
        expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
    });
});

describe("getLastestNotification", () => {
    it("returns <strong>Urgent requirement</strong> - complete by EOD", () => {
        expect(getLatestNotification()).toEqual(
            "<strong>Urgent requirement</strong> - complete by EOD"
        );
    });
});