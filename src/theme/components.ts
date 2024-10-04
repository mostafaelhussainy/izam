const components = {
  MuiCssBaseline: {
    styleOverrides: {
      "ul, ol": {
        listStyle: "none",
        padding: 0,
      },
      "::-webkit-scrollbar": {
        width: "4px",
        height: "4px",
      },
      "::-webkit-scrollbar-track": {
        backgroundColor: "#f1f1f1",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "#888",
      },
      "::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#555",
      },
    },
  },

  MuiTypography: {
    defaultProps: {},
  },

  MuiButton: {
    styleOverrides: {
      root: {},
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
        disableRipple: true,
      },
    },
  },

  MuiIconButton: {
    styleOverrides: {
      root: {},
    },
    defaultProps: {
      disableElevation: true,
      disableFocusRipple: true,
      disableRipple: true,
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        background: "#FFF",
        borderRadius: "50px",
        padding: "0 10px",
        "& .MuiInputBase-input": {
          paddingLeft: "10px",
        },
      },
    },
  },

  MuiTextField: {
    styleOverrides: {
      root: {},
    },
  },

  MuiAutoComplete: {
    styleOverrides: {
      root: {},
    },
  },

  MuiPopper: {
    styleOverrides: {
      root: {},
    },
  },
};

export default components;
