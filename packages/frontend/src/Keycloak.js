import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "http://host.docker.internal:8080/auth",
    realm: "oauth-keycloak-app",
    clientId: "spa-app",
});

export default keycloak;
