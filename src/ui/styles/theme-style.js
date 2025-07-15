const sharedStyles = {
 cardShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
 transition: "all 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15)"
};

const lightTheme = {
 ...sharedStyles,
 bgApp: "#F5F5F5",
 primaryText: "#00350f",
 secondaryText: "#416445",
 thirdText: "#9ca677",
 primaryButtons: "#b1f7c3",
 secondaryButtons: "#7A9A01",
 details: "#00350f",
 white: "#F5F5F5"

};

const darkTheme = {
 ...sharedStyles,

 bgApp: "#231e1b",
 primaryText: "#0e5835",
 secondaryText: "#416445",
 thirdText: "#597147",
 primaryButtons: "#b1f7c3",
 secondaryButtons: "#7A9A01",
 details: "#b1f7c3",
 white: "#F5F5F5"
};

export { lightTheme, darkTheme };
