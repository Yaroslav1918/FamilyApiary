import axios from "axios";


export default async function requestToGoogle(
  response: any
): Promise<any> {
  try {
    const res = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${response.access_token}`,
        },
      }
    );

    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
