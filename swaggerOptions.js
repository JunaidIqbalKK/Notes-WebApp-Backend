import swaggerJsdoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Notes-WebApp API Documentation",
      version: "1.0.0",
      description:
        "API documentation for Notes-WebApp. Get all info here about database schemas, request, response, data validation, authentication and authorization.",
      contact: {
        name: "API Support",
        email: "junaidiqbalkk@gmail.com",
        url: "https://github.com/JunaidIqbalKK",
      },
    },
  },
  apis: ["./routes/*.js", "swagger-definition.yaml"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
