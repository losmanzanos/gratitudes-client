import TokenService from "./token-service";
import config from "../config";

const GratitudeApiService = {
  getGratitudes() {
    console.log("hello");
    return fetch(`${config.API_ENDPOINT}/gratitudes`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getGratitude(gratitudeId) {
    return fetch(`${config.API_ENDPOINT}/gratitudes/${gratitudeId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getGratitudeComments(gratitudeId) {
    return fetch(`${config.API_ENDPOINT}/gratitudes/${gratitudeId}/comments`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postComment(gratitudeId, text) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        gratitude_id: gratitudeId,
        text,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default GratitudeApiService;
