import iziToast from "izitoast";

export const showToast = (
  message: string,
  type: "success" | "error" | "info",
) => {
  let color = "";

  switch (type) {
    case "info":
      color = "rgb(233,236,239)";
      break;
    case "error":
      color = "rgb(241,81,86)";
      break;
    default:
      color = "rgb(0,255,184)";
      break;
  }

  iziToast.show({
    theme: "dark",
    icon: "icon-person",
    title: message,
    position: "bottomCenter", // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
    progressBarColor: color,
    timeout: 3000,
  });
};

export const getApiUrl = () => {
  const isLocal = window.location.href.indexOf("localhost") > -1;
  const localHost = "http://localhost:3001";
  const apiEndpoint = "/api";
  return isLocal ? localHost + apiEndpoint : apiEndpoint;
};

// export const scrollToTop = $("html, body").animate({ scrollTop: 0 }, "slow");

export const buildUrl = (basePath: string, path: string) => {
  if (path.startsWith("/")) {
    path = path.slice(1, path.length);
  }

  return basePath.endsWith("/")
    ? basePath.concat(path)
    : basePath.concat("/").concat(path);
};
