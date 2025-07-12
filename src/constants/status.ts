export const STATUS_CODES = {
  SUCCESS: {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
  },
  CLIENT_ERROR: {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    UNPROCESSABLE_ENTITY: 422,
  },
  SERVER_ERROR: {
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
  },
};

export const ERROR_MESSAGES = {
  // User Errors
  USER_ALREADY_EXISTS: "User Already Exists!",
  USER_CREATION_FAILED: "Failed to Save User in the Database!",
  INVALID_CREDENTIALS: "Incorrect Id or Password!",

  // Token Errors
  PRIVATE_KEY_READ_FAILED: "Failed to Read Private Key!",
  ACCESS_TOKEN_CREATION_FAILED: "Failed to Create Access Token!",
  REFRESH_TOKEN_CREATION_FAILED: "Failed to Create Refresh Token!",
  DB_REFRESH_TOKEN_NOT_FOUND: "Persisted Refresh Token Not Found!",
  DB_REFRESH_TOKEN_CREATE_FAILED: "Failed to Create Persisted Refresh Token!",
  DB_REFRESH_TOKEN_DELETE_FAILED: "Failed to Delete Persisted Refresh Token!",
  PAYLOAD_CREATION_FAILED: "Failed to Create Payload for JWT!",
  TOKENS_CREATION_FAILED: "Failed to Create Access and Refresh Tokens!",
  COOKIES_CREATION_FAILED: "Failed to Create Cookies!",
  COOKIES_CLEAR_FAILED: "Failed to Clear Cookies!",

  //Trip Errors
  INVALID_PICKUP_DROP: "Both pickup and drop locations are required",
  LAT_LONG_REQUIRED: "Latitude and longitude are required for both locations",
  DISTANCE_CALCULATION_FAILED:
    "Unable to calculate distance. Please try again later.",
};

export const SUCCESS_MESSAGES = {
  USER_REGISTERED: "User Registered Successfully!",
  USER_LOGGED_OUT: "User Logged Out Successfully!",
  USER_LOGGED_IN: "User Logged In Successfully!",
  USER_UPDATED: "User Updated Successfully!",
  USER_DELETED: "User Deleted Successfully!",
};
