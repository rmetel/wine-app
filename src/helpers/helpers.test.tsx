import { test } from "vitest";
import "@testing-library/jest-dom";
import { buildUrl } from "./helpers";

describe("helpers", () => {
  describe("buildUrl with root as basePath", () => {
    const basePath = "/";
    test("should build url, given basePath equals root and url with starting slash", async () => {
      expect(buildUrl(basePath, "/home")).toEqual("/home");
    });

    test("should build url, given basePath equals root and url without starting slash", async () => {
      expect(buildUrl(basePath, "home")).toEqual("/home");
    });
  });

  describe("buildUrl with subfolder as basePath", () => {
    const basePath = "/dev";
    test("should build url, given given basePath equals subfolder and url with starting slash", async () => {
      expect(buildUrl(basePath, "/home")).toEqual("/dev/home");
    });

    test("should build url, given given basePath equals subfolder without starting slash", async () => {
      expect(buildUrl(basePath, "home")).toEqual("/dev/home");
    });
  });

  describe("buildUrl for images", () => {
    const basePath = "/dev";
    test("should build url, given given basePath equals subfolder and img src", async () => {
      expect(buildUrl(basePath, "/img/portfolio/thumbnail-1.jpg")).toEqual(
        "/dev/img/portfolio/thumbnail-1.jpg",
      );
    });
  });
});
