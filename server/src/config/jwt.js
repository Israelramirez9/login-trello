const ACCESS_TOKEN_SECRET = process.env.SECRET_TOKEN || "acces-secret";
const REFRESH_TOKEN_SECRET = process.env.SECRET_REFRESH_TOKEN || "refresh-secret";
const ACCESS_TOKEN_EXPIRES_IN = parseInt(process.env.JWT_EXPIRES_IN) || 3600;
const REFRESH_TOKEN_EXPIRES_IN = "30d";

module.exports = { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET, REFRESH_TOKEN_EXPIRES_IN, ACCESS_TOKEN_EXPIRES_IN }