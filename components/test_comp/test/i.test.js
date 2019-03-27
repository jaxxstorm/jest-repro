// Define tests for storageclass component
//
const _ = require("lodash");
const componentName = 'storageclasses';
const {
    getTestEnvironmentComponents
} = require("../../../lib/testHelpers.js");

const component = getTestEnvironmentComponents(componentName);


test("Checking array properties", () => {
  expect(Array.isArray(component)).toBe(true);
  expect(component).toHaveLength(2);
});
