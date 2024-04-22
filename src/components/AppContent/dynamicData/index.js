import SvgIcon from "@mui/material/SvgIcon";
export const AppButtonProps = [
  {
    buttonProps: {
      size: "large",
      variant: "contained",
      style: {
        fontWeight: "bold",
        background: "#54a8c7",
        fontSize: "clamp(10px, 3vw, 1.3rem)",
        textDecoration: "none",
      },
      sx: { textTransform: "none" },
      startIcon: (
        <SvgIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            id="apple"
            loading="lazy"
          >
            <g
              fillRule="evenodd"
              fill="#ffffff"
              className="color000000 svgShape"
            >
              <path
                d="M11.6218,4.7571c-0.0193291,-2.02332 1.65317,-2.99846 1.72865,-3.04467c-0.939167,-1.37684 -2.40442,-1.56532 -2.92624,-1.58735c-1.24564,-0.125075 -2.431,0.734352 -3.06342,0.734352c-0.630702,0 -1.60726,-0.7153 -2.63953,-0.694961c-1.35921,0.0188997 -2.61125,0.789063 -3.31105,2.00483c-1.41025,2.44865 -0.360481,6.07511 1.01479,8.0616c0.671226,0.970026 1.47351,2.06429 2.52553,2.02476c1.0148,-0.0397892 1.39689,-0.654453 2.62078,-0.654453c1.22488,0 1.56888,0.654453 2.64224,0.634268c1.08898,-0.0196037 1.78139,-0.990762 2.44848,-1.96475c0.771157,-1.12822 1.0887,-2.22035 1.10719,-2.27707c-0.0234604,-0.0085233 -2.12539,-0.815491 -2.14743,-3.23655v0Z"
                transform="translate(.745 3.743)"
                fill="#ffffff"
                className="color000000 svgShape"
              ></path>
              <path
                d="M2.49696,2.55553c0.559066,-0.677623 0.934193,-1.61793 0.831414,-2.55553c-0.804695,0.031969 -1.78039,0.537152 -2.3568,1.21266c-0.51813,0.599437 -0.97158,1.55665 -0.848624,2.47462c0.897671,0.0697992 1.81466,-0.455431 2.37401,-1.13175v0Z"
                transform="translate(7.857)"
                fill="#ffffff"
                className="color000000 svgShape"
              ></path>
            </g>
          </svg>
        </SvgIcon>
      ),
    },
    btnName: "App Store",
    links: {
      href: "https://apps.apple.com/ag/app/getherly/id1608764375",
      target: "_blank",
      rel: "noreferrer",
    },
  },
  {
    buttonProps: {
      size: "large",
      variant: "contained",
      style: {
        backgroundColor: "#45c4a0",
        fontWeight: "bold",
        fontSize: "clamp(10px, 3vw, 1.3rem)",
      },
      sx: { textTransform: "none" },
      startIcon: (
        <SvgIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            clipRule="evenodd"
            viewBox="0 0 24 24"
            id="googleplay"
            loading="lazy"
          >
            <g
              transform="translate(-40 -40)"
              fill="#000000"
              className="color000000 svgShape"
            >
              <rect width="24" height="24" x="40" y="40" fill="none"></rect>
              <path
                fill="#ffffff"
                d="M427.176,289.399C427.833,289.013 428.695,288.994 429.544,289.448L445.567,298.015C446.783,298.665 446.901,299.556 446.9,300.001C446.9,300.447 446.782,301.337 445.567,301.986L440.504,304.693C440.495,304.698 440.486,304.703 440.477,304.708L429.544,310.553C429.113,310.783 428.675,310.891 428.269,310.891C427.874,310.891 427.503,310.792 427.177,310.602L427.162,310.593C427.156,310.589 427.149,310.585 427.143,310.581L427.138,310.578C426.488,310.178 426.067,309.427 426.067,308.472L426.067,291.53C426.067,290.57 426.49,289.817 427.14,289.421C427.151,289.413 427.163,289.406 427.176,289.399ZM427.867,308.206L435.307,300L427.867,291.794L427.867,308.206ZM430.466,308.019L438.623,303.658L436.522,301.34L430.466,308.019ZM440.26,297.218L437.737,300L440.26,302.783L444.718,300.399C444.998,300.249 445.1,300.104 445.1,299.999C445.1,299.896 444.998,299.752 444.718,299.602L440.26,297.218ZM436.522,298.66L438.623,296.343L430.468,291.983L436.522,298.66Z"
                transform="translate(-384 -248)"
                className="color2c2c2c svgShape"
              ></path>
            </g>
          </svg>
        </SvgIcon>
      ),
    },
    btnName: " Google Play",
    links: {
      href: "https://play.google.com/store/apps/details?id=com.twigscorp.app",
      target: "_blank",
      rel: "noreferrer",
    },
  },
];
export const AppContent_ImageProps = [
  {
    src: require("../../../assert/images/appContentRobo.png"),
    loading: "lazy",
    alt: "robo",
    width: "50%",
    height: "50%",
    id: "robo-img",

    style: { marginLeft: "-2.5rem", marginTop: "-90%" },
  },
  {
    src: require("../../../assert/images/getherlyMobileSignup.png"),
    alt: "mobile",
    loading: "lazy",
    className: "mt-5",
    width: "50%",
    height: "90%",
    fluid: true,
  },
];
// pay_NtnwYCx4KFfDGV;
