const heading = {
  color: "text",
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
};

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "verdana,arial,sans-serif,helvetica",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: "#0d0f0f",
    background: "#fff",
    primary: "#639",
    secondary: "#ff6347",

    orangeText15: "#FF6600",
    orangeMuted: "#ffcc99",

    comentUserBackground: "#ff9934",
    commentBackground: "#f9d6b4",

    redText: "#cc0000",

    link: "#003399",

    tableHeaderBg: "#6699cc",
    tableTitleBg: "#b1d0f0",
    tableTitleText: "#346598",
    tableValueBg: "#d5e8fb",
  },

  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      ...heading,
      fontSize: 5,
    },
    h2: {
      ...heading,
      fontSize: 4,
    },
    h3: {
      ...heading,
      fontSize: 3,
    },
    h4: {
      ...heading,
      fontSize: 2,
    },
    h5: {
      ...heading,
      fontSize: 1,
    },
    h6: {
      ...heading,
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      mt: 0,
      mb: 2,
      fontSize: 0,
    },
    a: {
      color: "blue",
    },
  },
  sizes: {
    leftCol: 300,
    rightCol: 435,
  },
  leftSideCard: {
    wrapper: {
      border: "2px solid",
      borderColor: "tableHeaderBg",
      mb: 3,
    },
    title: {
      bg: "tableHeaderBg",
      color: "white",
      fontSize: 1,
      px: 2,
      py: 1,
    },
    row: {
      display: "grid",
      gridTemplateColumns: "100px 1fr",
      px: 1,
      my: 1,
      gridGap: 1,
    },
    rowTitle: {
      fontSize: 0,
      fontWeight: "heading",
      bg: "tableTitleBg",
      color: "tableTitleText",
      p: 1,
    },
    rowText: {
      fontSize: 0,
      bg: "tableValueBg",
      p: 1,
    },
  },
  rightSideCard: {
    wrapper: {
      mb: 3,
    },
    title: {
      bg: "orangeMuted",
      color: "orangeText15",
      fontSize: 1,
      px: 2,
      py: 1,
    },
  },
};
